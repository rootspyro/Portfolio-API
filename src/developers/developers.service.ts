import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Developers } from './developers.entities';
import { 
  DevelopersResponse,
  DeveloperResponse,
  StudiesResponse,
  ExperienceResponse,
  FrontendResponse,
  BackendResponse,
  SkillsResponse,
  ProjectsResponse,
  PersoProjectsResponse,
  ContactResponse, 
  WorkProjectsResponse
} from './developers.parser'

@Injectable()
export class DevelopersService {
  constructor(@InjectModel(Developers.name) private devModel : Model<Developers>){}

  async getAllDevs() {
    let response = await this.devModel.find().exec();
    return DevelopersResponse(response);
  } 

  async getDevById(id : string){
    let response = await this.devModel.findById(id);
    return DeveloperResponse(response);
  }

  async getDevStudies( id : string ) {
    let response = await this.devModel.findById(id , { "studies" : 1});
    return StudiesResponse(response);
  }

  async getDevExperience( id : string ) {
    let response = await this.devModel.findById(id , { "experience" : 1});
    return ExperienceResponse(response);
  }

  async getDevSkills( id : string ) {
    let response = await this.devModel.findById(id , { "skills" : 1});
    return SkillsResponse(response);
  }

  async getDevFrontend( id : string ) {
    let response = await this.devModel.findById(id , { "skills.frontend" : 1});
    return FrontendResponse(response);
  }

  async getDevBackend( id : string ) {
    let response = await this.devModel.findById(id , { "skills.backend" : 1});
    return BackendResponse(response);
  }

  async getDevProjects( id : string ) {
    let response = await this.devModel.findById(id , { 'projects' : 1 })
    return ProjectsResponse(response);
  }

  async getPersonalProjects( id : string ) {
    let response = await this.devModel.findById(id , { 'projects.personal' : 1 })
    return PersoProjectsResponse(response);
  }

  async getWorkProjects( id : string ) {
    let response = await this.devModel.findById(id , { 'projects.work' : 1 })
    return WorkProjectsResponse(response);
  }

  async getDevContact( id : string ) {
    let response = await this.devModel.findById(id, { 'contact' : 1 })
    return ContactResponse(response);
  }
}
