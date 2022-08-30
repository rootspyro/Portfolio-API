import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { MongoIdPipe } from '../mongo-id.pipe';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor( private companieService : CompaniesService ){}

  @Get()
  Companies(
    @Query('name') name : string = '.',
    @Query('country') country : string = '.',
  ){
    return this.companieService.GetAllCompanies(name, country);
  }

  @Get(":id")
  GetCompany(@Param('id', MongoIdPipe) id : string ){

    return this.companieService.GetCompanyById(id);
  }
  
}
