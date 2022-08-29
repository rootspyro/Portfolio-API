import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { ApiTags} from '@nestjs/swagger';
import {CreateSkill} from './skills.dtos';

@ApiTags('skills')
@Controller('skills')
export class SkillsController {

  constructor( private skService : SkillsService ){}

  @Get()
  Skills() {
    return this.skService.GetAllSkills();
  }

  @Post()
  createSkill(@Body() payload : CreateSkill){

    return { data : { msg : "hola mundo" } }

  }

  @Get(":id")
  getSkill(@Param('id') id : string) {
    return { data : { msg : "puta" } } 
  }
    
}
