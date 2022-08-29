import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { SkillsResponse, SkillResponse } from './skills.parser'
import { ObjectId } from 'mongodb';

@Injectable()
export class SkillsService {
 
  constructor(@Inject('MONGO') private database: Db) {}

  skCollection = this.database.collection("Skills");

  async GetAllSkills() {
    return SkillsResponse( await this.skCollection.find().toArray());
  }

  async GetSkillById( id : string ){
    const skill = await this.skCollection.findOne({ _id :  new ObjectId(id) });
  }

}
