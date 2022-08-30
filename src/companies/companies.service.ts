import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Companies } from './companies.entities';
import {CompanyResponse, CompaniesResponse} from './companies.parser';

@Injectable()
export class CompaniesService {

  constructor(@InjectModel(Companies.name) private companiesModel : Model<Companies>){}

  private regexParser(data : string){
    return new RegExp(`^${data}`, 'i');
  }

  async GetAllCompanies(name: string, country: string){

    return CompaniesResponse( await this.companiesModel.find(
      { 
        name : { "$regex" : this.regexParser(name) }, 
        country : { '$regex' : this.regexParser(country)}
      })
    )
  }

  async GetCompanyById(id : string) { 

    return { data : CompanyResponse(await this.companiesModel.findById(id)) };

  }

}
