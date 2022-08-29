import { IsString, IsNotEmpty, IsUrl, IsObject } from 'class-validator'


export class CreateSkill{

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
