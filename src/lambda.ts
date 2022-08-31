import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import {Handler, Context, Callback} from 'aws-lambda';

const APP_VERSION = process.env.npm_package_version;

let server : Handler;

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

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({app : expressApp})
}

export const handler : Handler = async (
  event: any,
  context : Context,
  callback : Callback
) => {
  server = server ?? (await bootstrap());
  return server(event,context,callback)
}
