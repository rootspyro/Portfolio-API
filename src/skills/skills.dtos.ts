import { IsString, IsNotEmpty, IsUrl, IsObject } from 'class-validator'
import { ObjectID } from 'bson';

export class CreateSkill{

  _id : ObjectID;

  @IsString()
  @IsNotEmpty()
  name : string;

  @IsString()
  @IsNotEmpty()
  type : string;

  @IsString()
  @IsUrl()
  uri : string;

  @IsString()
  @IsUrl()
  repository : string;

  @IsString()
  @IsNotEmpty()
  created_in : string;

  @IsString()
  description : string;

  @IsObject()
  meta : object;

}
