import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { BookService } from 'src/book/book.service';
import { BookController } from 'src/book/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, bookSchema } from 'src/book/schema/book.schema';
import { Query, querySchema } from 'src/book/schema/query.schema';
import { Error, errorSchema } from 'src/book/schema/error.schema';
import { DecodeTokenMiddleware } from 'src/account/middleware/jwt-middleware';
import { QueryPST, queryPstSchema } from './schema/queryPST.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: bookSchema,
      },
      {
        name: Query.name,
        schema: querySchema,
      },
      {
        name: Error.name,
        schema: errorSchema,
      },
      {
        name: QueryPST.name,
        schema: queryPstSchema,
      },
    ]),
  ],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DecodeTokenMiddleware)
      .forRoutes(
        { path: '/book', method: RequestMethod.GET },
        { path: '/book/upload/url', method: RequestMethod.POST },
        { path: '/book/upload/file', method: RequestMethod.POST },
        { path: '/book/question', method: RequestMethod.POST },
        { path: '/book/paraphrase', method: RequestMethod.POST },
        { path: '/book/summarize', method: RequestMethod.POST },
        { path: '/book/text', method: RequestMethod.POST },
      );
  }
}
