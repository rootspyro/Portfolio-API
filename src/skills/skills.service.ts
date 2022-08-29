import { Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Skills } from './skills.entities'
import {SkillsResponse, SkillResponse} from './skills.parser';

@Injectable()
export class SkillsService {
 
  constructor(@InjectModel(Skills.name) private skillModel : Model<Skills>){}

  private regexParser(data : string){
    return new RegExp(`^${data}`, 'i');
  }

  async GetAllSkills(name : string, type: string) {

    let data = await this.skillModel.find({ name : { "$regex" : this.regexParser(name) }, type : { '$regex' : this.regexParser(type)}}).exec();
    return SkillsResponse(data);
  }

  async GetSkillById( id : string ) {

    let skill = await this.skillModel.findById(id);
    return { data : SkillResponse(skill)}
  }

}
