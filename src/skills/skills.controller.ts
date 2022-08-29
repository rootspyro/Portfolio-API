import { Controller, Get, Post, Body, Param, Query} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { ApiTags} from '@nestjs/swagger';


@ApiTags('skills')
@Controller('skills')
export class SkillsController {

  constructor( private skService : SkillsService ){}

  @Get()
  Skills(
    @Query('name') name : string = '.',
    @Query('type') type : string = '.',
  ) {
    return this.skService.GetAllSkills(name, type);
  }

  @Get(":id")
  getSkill(@Param('id') id : string) {
    return this.skService.GetSkillById(id);
  }
    
}
