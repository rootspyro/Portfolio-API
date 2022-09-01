import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {MongoIdPipe} from '../mongo-id.pipe';
import { DevelopersService } from './developers.service';

@ApiTags('Developers')
@Controller('developers')
export class DevelopersController {

  constructor( private devService : DevelopersService ){}

  @Get()
  Developers(){
    return this.devService.getAllDevs();
  } 

  @Get(":id")
  Developer(@Param('id', MongoIdPipe) id : string ){
    return this.devService.getDevById(id);
  }

  @Get(":id/studies")
  DevStudies(@Param('id', MongoIdPipe) id : string) {
    return this.devService.getDevStudies(id);
  }

  @Get(":id/experience")
  DevExperience(@Param('id', MongoIdPipe) id : string){
    return this.devService.getDevExperience(id);
  }

  @Get(":id/skills")
  DevSkills(@Param('id', MongoIdPipe) id : string){
    return this.devService.getDevSkills(id);
  }

  @Get(":id/skills/frontend")
  DevFrontend(@Param('id', MongoIdPipe) id : string){
    return this.devService.getDevFrontend(id);
  }

  @Get(":id/skills/backend")
  DevBackend(@Param('id', MongoIdPipe) id : string){
    return this.devService.getDevBackend(id);
  }

  @Get(":id/projects")
  DevProjects(@Param('id', MongoIdPipe) id : string){
    return this.devService.getDevProjects(id);
  }

  @Get(":id/projects/personal")
  DevProjectsPersonal(@Param('id', MongoIdPipe) id : string){
    return this.devService.getPersonalProjects(id);
  }

  @Get(":id/projects/work")
  DevProjectsWork(@Param('id', MongoIdPipe) id : string){
    return this.devService.getWorkProjects(id);
  }

  @Get(":id/contact")
  DevContact(@Param('id', MongoIdPipe) id : string){
    return this.devService.getDevContact(id);
  }

}
