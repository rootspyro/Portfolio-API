import { Injectable, Inject } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { SkillsResponse, SkillResponse } from './skills.parser'

@Injectable()
export class SkillsService {
 
  constructor(@Inject('MONGO') private database: Db) {}

  skCollection = this.database.collection("Skills");

  private regexParser(data : string){

    return new RegExp(`^${data}`, 'i');
  }

  async GetAllSkills(name : string, type: string) {
    
    return SkillsResponse( await this.skCollection.find(
      { name : { "$regex" : this.regexParser(name) }, type : { '$regex' : this.regexParser(type) } }).toArray());
  }

  async GetSkillById( id : string ){

    let skId = new ObjectId(id);
    let skill = await this.skCollection.findOne({ _id : skId });
    return { data : SkillResponse(skill) }
  }

}
