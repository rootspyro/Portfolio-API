import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({collection : "Companies"})
export class Companies{

  @Prop({ required : true })
  name : string;

  @Prop({ required : true })
  country : string;

  @Prop({ required : true })
  direction : string;

  @Prop({ required : true })
  description : string;

  @Prop({ required : true, type : Object })
  contact : object;

}

export const CompaniesSchema = SchemaFactory.createForClass(Companies);

export class CompanyEntity { 
  id : string;
  attributes : {
    name : string;
    country : string;
    direction : string;
    description : string;
    contact : object;
  }
}

