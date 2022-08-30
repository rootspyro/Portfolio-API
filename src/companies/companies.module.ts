import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Companies, CompaniesSchema } from './companies.entities';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name : Companies.name,
      schema : CompaniesSchema
    }
  ])],
  providers: [CompaniesService],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
