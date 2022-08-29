import { IsString, IsNotEmpty, IsUrl } from 'class-validator'

export class CreateSkill{
  @IsString()
  @IsNotEmpty()
  name : string;

  @IsString()
  @IsNotEmpty()
  type : string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  uri : string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  repository : string;

  @IsString()
  @IsNotEmpty()
  created_in : string;

  @IsString()
  description : string;

}
