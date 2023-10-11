import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Express } from 'express';
import * as fs from 'fs-extra';
import axios from 'axios';
import FormData from 'form-data';
import { InjectModel } from '@nestjs/mongoose';
import { AI21 } from '@officialyenum/ai21';
import { Model } from 'mongoose';
import { Book } from './schema/book.schema';
import { Query } from './schema/query.schema';
import { Error } from './schema/error.schema';
import { BookInterface } from './interface/book.interface';
import { v4 } from 'uuid';
import requestWithUserToken from 'src/account/interface/request-with-user.interface';
import { QueryPST } from './schema/queryPST.schema';
import { IRewrite } from '@officialyenum/ai21/lib/cjs/types/library';
import { QueryPstInterface } from './interface/queryPst.interface';
import { QueryPSTEnum } from './enum/pst.enum';
import { TextImprovementDto } from './dto/text.dto';
import { GetQueryDto } from './dto/query.dto';
import { GetErrorDto } from './dto/error.dto';
import { RegisterQuestionDto } from './dto/question.dto';
import { ParaphraseDto } from './dto/paraphrase.dto';
import { SummarizeDto } from './dto/summarize.dto';
const token = process.env.AI21_KEY;
const ai = new AI21(token);
const log = process.env.LOG || false;
console.log(log);

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(Query.name) private queryModel: Model<Query>,
    @InjectModel(Error.name) private errorModel: Model<Error>,
    @InjectModel(QueryPST.name) private queryPSTModel: Model<QueryPST>,
  ) {}

  async registerBooksByFile(
    file: Express.Multer.File,
    req: requestWithUserToken,
  ) {
    let bookName = file.originalname;
    let formData = new FormData();
    await fs.writeFileSync(
      `./src/book/asset/${file.originalname}`,
      file.buffer,
    );
    formData.append(
      'file',
      fs.createReadStream(`./src/book/asset/${file.originalname}`) as any,
    );

    const options = {
      headers: {
        'x-api-key': process.env.CHATPDF_KEY,
        ...formData.getHeaders(),
      },
    };

    try {
      let response = await axios.post(
        'https://api.chatpdf.com/v1/sources/add-file',
        formData,
        options,
      );
      let bookQuery: BookInterface = {
        title: file.originalname,
        src: response.data.sourceId,
        userUuid: req.user.uuid,
      };
      await this.bookModel.create(bookQuery);
      await fs.removeSync(`./src/book/asset/${file.originalname}`);
      return response.data;
    } catch (error) {
      let errorQuery = {
        message: JSON.stringify(error.response.data),
        route: '/book/upload/file',
        data: JSON.stringify({ file: file.originalname }),
      };
      await this.errorModel.create(errorQuery);
      if ((error.message = 'Request failed with status code 400')) {
        if (error.response.data.error) {
          throw new BadRequestException(error.response.data.error);
        }
        throw new BadRequestException(error.response.data.message);
      }
    }
  }

  async registerBooksByUrl(
    url: string,
    title: string,
    req: requestWithUserToken,
  ) {
    const data = {
      url,
    };

    const config = {
      headers: {
        'x-api-key': process.env.CHATPDF_KEY,
        'Content-Type': 'application/json',
      },
    };

    try {
      let response = await axios.post(
        'https://api.chatpdf.com/v1/sources/add-url',
        data,
        config,
      );
      let bookQuery: BookInterface = {
        title,
        src: response.data.sourceId,
        userUuid: req.user.uuid,
      };
      await this.bookModel.create(bookQuery);
      return response.data;
    } catch (error) {
      console.log(error);
      let errorQuery = {
        message: JSON.stringify(error.response.data),
        route: '/book/upload/url',
        data: JSON.stringify({ url, title }),
      };
      await this.errorModel.create(errorQuery);
      if ((error.message = 'Request failed with status code 400')) {
        if (error.response.data.error) {
          throw new BadRequestException(error.response.data.error);
        }
        throw new BadRequestException(error.response.data.message);
      }
    }
  }

  async registerQuestion(body: RegisterQuestionDto, req: requestWithUserToken) {
    const config = {
      headers: {
        'x-api-key': process.env.CHATPDF_KEY,
        'Content-Type': 'application/json',
      },
    };

    let messages = JSON.parse(body.messages);
    const data = {
      referenceSources: false,
      sourceId: body.src,
      messages,
    };

    if (body.referenceSources === 'true') data.referenceSources = true;

    try {
      let response = await axios.post(
        'https://api.chatpdf.com/v1/chats/message',
        data,
        config,
      );
      let query = {
        uuid: v4(),
        userUuid: req.user.uuid,
        bookRef: body.src,
        messages: body.messages,
        referenceSources: data.referenceSources,
        result: JSON.stringify(response.data),
      };
      let queryUuid;
      if (body.queryUUid) {
        queryUuid = body.queryUUid;
        let queryData = await this.queryModel.findOne({
          uuid: body.queryUUid,
        });
        queryData.messages = body.messages;
        await queryData.save();
      } else {
        queryUuid = query.uuid;
        await this.queryModel.create(query);
      }
      let result = response.data;
      result['queryUuid'] = queryUuid;
      return response.data;
    } catch (error) {
      console.log(error);
      let errorQuery = {
        message: JSON.stringify(error.response.data),
        route: '/book/question',
        data: JSON.stringify({ body }),
      };
      await this.errorModel.create(errorQuery);
      if ((error.message = 'Request failed with status code 400')) {
        if (error.response.data.error) {
          throw new BadRequestException(error.response.data.error);
        }
        throw new BadRequestException(error.response.data.message);
      }
    }
  }

  async deleteBook(body: { src: string }, req: requestWithUserToken) {
    let bookData = await this.bookModel
      .findOne({
        src: body.src,
      })
      .lean();

    if (bookData.userUuid !== req.user.uuid)
      throw new UnauthorizedException('Invalid Book Credentials');
    const config = {
      headers: {
        'x-api-key': process.env.CHATPDF_KEY,
        'Content-Type': 'application/json',
      },
    };

    const data = {
      sources: [body.src],
    };

    try {
      let response = await axios.post(
        'https://api.chatpdf.com/v1/sources/delete',
        data,
        config,
      );

      return response.data;
    } catch (error) {
      console.log(error);
      let errorQuery = {
        message: JSON.stringify(error.response.data),
        route: '/book/delete',
        data: JSON.stringify({ body }),
      };
      await this.errorModel.create(errorQuery);
      if ((error.message = 'Request failed with status code 400'))
        throw new BadRequestException(error.response.data.message);
    }
  }

  async createParaphrase(body: ParaphraseDto, req: requestWithUserToken) {
    if (body.uuidQuery) {
      const queryExist = await this.queryModel
        .findOne({
          uuid: body.uuidQuery,
        })
        .lean();
      if (!queryExist) throw new BadRequestException('Query Does Not Exist');
    }
    const data = {
      text: body.query,
      style: body.style ? body.style : 'general',
    };
    let response = await ai.paraphrase(data);
    if (response.status === 'failed') {
      let errorQuery = {
        message: response.message,
        route: '/book/paraphrase',
        data: JSON.stringify({ body }),
      };

      await this.errorModel.create(errorQuery);
      throw new BadRequestException(response.message);
    }
    if (log) {
      let queryPst: QueryPstInterface = {
        uuid: v4(),
        userUuid: req.user ? req.user.uuid : 'NA',
        queryUuid: body.uuidQuery || 'NA',
        messages: JSON.stringify(data),
        result: JSON.stringify(response.data.suggestions),
        type: QueryPSTEnum.PARAPHRASE,
      };
      await this.queryPSTModel.create(queryPst);
    }
    return response.data.suggestions;

    //find query if exist, reject if not exist etc (untuk pencatatan analytics queryParaphraseModel)
    //insert to paraphrase api (text asalnya dari data yg lu kasi ke gw (bisa text bisa hasil query))
    //return tinggal create
  }

  async createSummarize(body: SummarizeDto, req: requestWithUserToken) {
    if (body.uuidQuery) {
      const queryExist = await this.queryModel
        .findOne({
          uuid: body.uuidQuery,
        })
        .lean();
      if (!queryExist) throw new BadRequestException('Query Does Not Exist');
    }
    const headers = {
      Authorization: `Bearer ${process.env.AI21_KEY}`,
      'Content-Type': 'application/json',
    };

    const data = {
      text: body.query,
      type: body.type ? body.type : 'wikipedia_article',
    };
    let response = await ai.summarize(data);
    if (response.status === 'failed') {
      let errorQuery = {
        message: response.message,
        route: '/book/summarize',
        data: JSON.stringify({ body }),
      };
      await this.errorModel.create(errorQuery);
      throw new BadRequestException(response.message);
    }
    if (log) {
      let queryPst: QueryPstInterface = {
        uuid: v4(),
        userUuid: req.user ? req.user.uuid : 'NA',
        queryUuid: body.uuidQuery || 'NA',
        messages: JSON.stringify(data),
        result: JSON.stringify(response.data.summaries),
        type: QueryPSTEnum.SUMMARIZE,
      };
      await this.queryPSTModel.create(queryPst);
    }
    return response.data.summaries;
  }

  async createTextImprovement(
    body: TextImprovementDto,
    req: requestWithUserToken,
  ) {
    if (body.uuidQuery) {
      let queryData = await this.queryModel.findOne({
        uuid: body.uuidQuery,
      });
      if (!queryData) throw new BadRequestException('Query Not Founds');
    }
    let data: IRewrite = {
      text: body.query,
      intent: body.intent,
    };
    let response = await ai.rewrite(data);
    if (response.status === 'failed') {
      let errorQuery = {
        message: response.message,
        route: '/book/text',
        data: JSON.stringify({ body }),
      };
      await this.errorModel.create(errorQuery);
      throw new BadRequestException(response.message);
    }
    if (log) {
      let queryPst: QueryPstInterface = {
        uuid: v4(),
        userUuid: req.user ? req.user.uuid : 'NA',
        queryUuid: body.uuidQuery || 'NA',
        messages: JSON.stringify(data),
        result: JSON.stringify(response.data.suggestions),
        type: QueryPSTEnum.TEXT,
      };
      await this.queryPSTModel.create(queryPst);
    }
    return response.data;
    //find query if exist, reject if not exist etc (untuk pencatatan analytics queryParaphraseModel)
    //insert to paraphrase api (text asalnya dari data yg lu kasi ke gw (bisa text bisa hasil query))
    //return tinggal create
  }

  async getQuery(body: GetQueryDto) {
    if (body.skip) {
      if (!body.limit)
        throw new BadRequestException('Cannot use skip without limit');
    }
    if (body.limit) {
      if (!body.skip)
        throw new BadRequestException('Cannot use limit without skip');
    }
    let data = await this.queryModel
      .find(
        { bookRef: body.bookRef },
        {},
        {
          skip: body.skip ? Number(body.skip) : 0,
          limit: body.limit ? Number(body.limit) : 0,
        },
      )
      .lean();
    return data;
  }

  async getErrorList(body: GetErrorDto) {
    if (body.skip) {
      if (!body.limit)
        throw new BadRequestException('Cannot use skip without limit');
    }
    if (body.limit) {
      if (!body.skip) throw new BadRequestException('Cannot use limit without skip');
    }
    let data = await this.errorModel
      .find(
        {},
        {},
        {
          skip: body.skip ? Number(body.skip) : 0,
          limit: body.limit ? Number(body.limit) : 0,
        },
      )
      .lean();
    return data;
  }

  async getBookList(req: requestWithUserToken, skip?: string, limit?: string) {
    if (skip) {
      if (!limit)
        throw new BadRequestException('Cannot use skip without limit');
    }
    if (limit) {
      if (!skip) throw new BadRequestException('Cannot use limit without skip');
    }
    let data = await this.bookModel
      .find(
        { userUuid: req.user.uuid },
        {},
        {
          skip: skip ? Number(skip) : 0,
          limit: limit ? Number(limit) : 0,
        },
      )
      .lean();
    return data;
  }
}
