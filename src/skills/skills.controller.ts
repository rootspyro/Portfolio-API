import { Controller, Get, Post, Body, Param, Query} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { ApiTags} from '@nestjs/swagger';
import { MongoIdPipe } from '../mongo-id.pipe';


@ApiTags('Skills')
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
  getSkill(@Param('id', MongoIdPipe) id : string) {
    return this.skService.GetSkillById(id);
  }
    
}
