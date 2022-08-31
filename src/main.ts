import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const APP_VERSION = process.env.npm_package_version;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api")
  //SWAGGER
  const options = new DocumentBuilder()
    .setTitle("Portfolio - API")
    .setDescription("My personal API for my professional profile")
    .setVersion(APP_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  //VALIDATION
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
  }))

  await app.listen(3000);
}
bootstrap();
