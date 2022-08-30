import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection : "Skills"})
export class Skills {
  @Prop({required : true})
  name: string;

  @Prop({required : true})
  type: string;

  @Prop({required : true})
  uri: string;

  @Prop({required : true})
  repository: string;

  @Prop({required : true})
  created_in: string;

  @Prop({required : true})
  description: string;

  @Prop({type: Object})
  meta : object;

}

export const SkillsSchema = SchemaFactory.createForClass(Skills);

export class SkillEntity { 
  id : string;
  attributes : { 
    name : string;
    type : string;
    uri : string;
    repository: string;
    created_in : string;
    description : string;
  };
  links : {
    self : string
  };
  meta : object;
}
