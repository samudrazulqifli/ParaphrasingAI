import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.HOST);
  console.log(`connected to port ${process.env.HOST}`);
}
bootstrap();
