import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import {Handler, Context, Callback} from 'aws-lambda';

const APP_VERSION = process.env.npm_package_version;

let server : Handler;

async function bootstrap() {
   
  const app = await NestFactory.create(AppModule, { cors : true });

  app.setGlobalPrefix("dev/api")

  const whitelist = ['https://rootspyro.com', 'https://portfolio-ui-ten.vercel.app'];

  app.enableCors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        console.log("allowed cors for:", origin)
        callback(null, true)
      } else {
        console.log("blocked cors for:", origin)
        callback(new Error('Not allowed by CORS'))
      }
    },
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
    credentials: true,
  });

  //SWAGGER
  const options = new DocumentBuilder()
    .setTitle("Portfolio - API")
    .setDescription("My personal API for my professional profile")
    .setVersion(APP_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  app.setGlobalPrefix("api")

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
