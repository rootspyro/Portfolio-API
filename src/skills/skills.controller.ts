import { Controller, Get, Post, Body, Param, Query} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { ApiTags, ApiQuery} from '@nestjs/swagger';
import { MongoIdPipe } from '../mongo-id.pipe';


@ApiTags('Skills')
@Controller('skills')
export class SkillsController {

  constructor( private skService : SkillsService ){}


  @Get()
  @ApiQuery({name : 'name', required : false})
  @ApiQuery({name : 'type', required : false})
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
