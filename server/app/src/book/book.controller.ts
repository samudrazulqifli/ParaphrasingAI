import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express, Response } from 'express';
import { BookService } from './book.service';
import { FileInterceptor } from '@nestjs/platform-express';
import requestWithUserToken from 'src/account/interface/request-with-user.interface';
import { TextImprovementDto } from './dto/text.dto';
import { GetQueryDto } from './dto/query.dto';
import { GetErrorDto } from './dto/error.dto';
import { RegisterQuestionDto } from './dto/question.dto';
import { ParaphraseDto } from './dto/paraphrase.dto';
import { SummarizeDto } from './dto/summarize.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('upload/file')
  @UseInterceptors(FileInterceptor('file'))
  async registerBooksByFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: requestWithUserToken,
    @Res() res: Response,
  ) {
    let data = await this.bookService.registerBooksByFile(file, req);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Post('upload/url')
  async registerBooksByUrl(
    @Res() res: Response,
    @Req() req: requestWithUserToken,
    @Body() body: { url: string; title: string },
  ) {
    let data = await this.bookService.registerBooksByUrl(
      body.url,
      body.title,
      req,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Post('question')
  async registerQuestion(
    @Body() body: RegisterQuestionDto,
    @Req() req: requestWithUserToken,
    @Res() res: Response,
  ) {
    let data = await this.bookService.registerQuestion(body, req);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Get('query')
  async getQueryList(@Res() res: Response, @Query() query: GetQueryDto) {
    let data = await this.bookService.getQuery(query);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Get('error')
  async getErrorList(@Res() res: Response, @Query() query: GetErrorDto) {
    let data = await this.bookService.getErrorList(query);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Get('')
  async getBookList(
    @Res() res: Response,
    @Req() req: requestWithUserToken,
    @Query() query: { skip?: string; limit?: string },
  ) {
    let data = await this.bookService.getBookList(req, query.skip, query.limit);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Post('paraphrase')
  async paraphrase(
    @Req() req: requestWithUserToken,
    @Res() res: Response,
    @Body() body: ParaphraseDto,
  ) {
    let data = await this.bookService.createParaphrase(body, req);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Post('summarize')
  async summarize(
    @Req() req: requestWithUserToken,
    @Res() res: Response,
    @Body() body: SummarizeDto,
  ) {
    let data = await this.bookService.createSummarize(body, req);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }

  @Post('text')
  async text(
    @Req() req: requestWithUserToken,
    @Res() res: Response,
    @Body()
    body: TextImprovementDto,
  ) {
    let data = await this.bookService.createTextImprovement(body, req);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data,
    });
  }
}
