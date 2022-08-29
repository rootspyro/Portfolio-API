import {SkillEntity} from "./skills.entities";
import { CreateSkill } from "./skills.dtos";

export function SkillResponse(entity : any) : SkillEntity{

  return { 
    id : entity._id.toString(),
    attributes : {
      name : entity.name,
      type : entity.type,
      uri : entity.uri,
      repository : entity.repository,
      created_in : entity.created_in,
      description : entity.description
    },
    links : {
      self : `/skills/${entity._id}`
    },
    meta : entity.meta
  } 
}

export function SkillsResponse( entity : any ) {

  let skills = [];

  entity.map((e : CreateSkill) => {
    skills.push(SkillResponse(e));
  });

  let response = { 
    data : skills,
    links : {
      self : "/skills"
    }
  }

  return response;
}
