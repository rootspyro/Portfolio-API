import { 
  DevelopersEntity,
  DeveloperEntity,
  DeveloperStudies, 
  DeveloperExperience, 
  DeveloperSkills,
  DeveloperSkill,
  DeveloperProjects,
  DeveloperContact,
  PersonalProjects,
  PersonalProject,
  WorkProjects,
  WorkProject
} from './developers.entities';

export function DevelopersResponse(entity : any) : DevelopersEntity { 

  let response = {
    data : []
  }

  entity.map((dev : any) => {

    response.data.push(
      {
        data : {
          id : dev._id,
          attributes : {
            nickname : dev.nickname,
            name : dev.name,
            lastname : dev.lastname,
            birthdate : dev.birthdate,
            citizenship : dev.citizenship,
            country : dev.country,
            region : dev.region,
            city : dev.city,
            img_uri : dev.city
          }
        },
        links : {
          self : `/developers/${dev._id}`
        }
      }
    )
  });

  return response;
}

export function DeveloperResponse(entity : any) : DeveloperEntity { 

  let response = { 
    data : {
      id : entity._id,
      attributes : {
        nickname : entity.nickname,
        name : entity.name,
        lastname : entity.lastname,
        birthdate : entity.birthdate,
        citizenship : entity.citizenship,
        country : entity.country,
        region : entity.region,
        city : entity.city,
        english_level: entity.english_level,
        img_uri : entity.img_uri,
        studies : StudiesResponse(entity),
        skills : SkillsResponse(entity),
        experience : ExperienceResponse(entity),
        projects : ProjectsResponse(entity),
        contact : ContactResponse(entity)
      }
    },
    links : {
      self : `/developers/${entity._id}`
    }
  }

  return response;
}

export function StudiesResponse(entity : any) : DeveloperStudies {

  let studies = [];
  
  entity.studies.map((study : any) => {
    studies.push({ 
      data : {
        type : study.type,
        title : study.title,
        institution : study.institution,
        institution_uri : study.institution_uri,
        ubication : study.ubication,
        graduation_year : study.graduation_year
      }
    }); 
  })

  let response = {

    data : studies,
    links : {
      self : `/developers/${entity._id}/studies` 
    }

  }

  return response;
}


export function ExperienceResponse(entity : any) : DeveloperExperience {

  let jobs = [];
  let experience = entity.experience;

  entity.experience.jobs.map((job: any) => {
    jobs.push(
      {
        data : {
          company_id : job.company_id,
          company_name : job.company_name,
          title : job.title,
          type_of_work : job.type_of_work,
          position : job.position,
          entry_date : job.entry_date,
          retirement_date : job.retirement_date
        },
        links : {
          related : `/companies/${job.company_id}`
        },
        meta : job.meta
      }
    )
  });
  
  let response = { 
    data : {
      role : experience.role,
      years : experience.years,
      jobs : jobs
    },
    links : {
      self : `/developers/${entity._id}/experience`,
      related : "/companies"
    } 
  }

  return response;
}

export function SkillsResponse(entity : any) : DeveloperSkills {

  let response = {
    data : {
      frontend : FrontendResponse(entity),
      backend : BackendResponse(entity)
    },
    links : {
      self : `/developers/${entity._id}/skills`,
      related : '/skills'
    }
  }

  return response;

}

export function FrontendResponse(entity : any) : DeveloperSkill {

  let frontSkills = [];

  entity.skills.frontend.map((skill : any) => {
    frontSkills.push(
      {
        data : {
          name : skill.name,
          level : skill.level,
          years : skill.years
        },
        links : {
          related : `/skills/${skill.skill_id}`
        }
      }
    )
  })

  let response = {
    data : frontSkills,
    links : {
      self : `/developers/${entity._id}/skills/frontend`
    }
  } 

  return response;

}

export function BackendResponse(entity : any) : DeveloperSkill {

  let backSkills = [];

  entity.skills.backend.map((skill : any) => {
    backSkills.push(
      {
        data : {
          name : skill.name,
          level : skill.level,
          years : skill.years
        },
        links : {
          related : `/skills/${skill.skill_id}`
        }
      }
    )
  })

  let response = {
    data : backSkills,
    links : {
      self : `/developers/${entity._id}/skills/backend`
    }
  } 

  return response;

}

export function ProjectsResponse(entity : any) : DeveloperProjects {
  
  let response = {
    data : {
      personal : PersoProjectsResponse(entity),
      work : WorkProjectsResponse(entity)
    },
    links : {
      self : `/developers/${entity._id}/projects`
    }
  }
  return response;
}

export function PersoProjectsResponse( entity : any ) : PersonalProjects {

  let projects = [];

  entity.projects.personal.map(( project : any ) => {
    projects.push( PersoProject(project) )
  })

  return { 
    data : projects,
    links : {
      self : `/developers/${entity._id}/projecs/personal`
    }
  }

}

export function PersoProject( entity : any ) : PersonalProject {

  let techs = {
    data : []
  }
  entity.technologies.map((tech : any) => {
    techs.data.push(
      {
        data : {
          skill_id : tech.skill_id,
          name : tech.name
        },
        links : {
          related : `/skills/${tech.skill_id}`
        }
      }
    )
  })

  return {
    data : {
      name : entity.name,
      description : entity.description,
      web_uri : entity.web_uri,
      repo_uri : entity.repo_uri,
      technologies : techs
    }
  }
}

export function WorkProjectsResponse(entity : any) : WorkProjects {

  let projects = [];

  entity.projects.work.map(( project : any ) => {
    projects.push( WProject(project) )
  })

  return { 
    data : projects,
    links : {
      self : `/developers/${entity._id}/projecs/work`
    }
  }

}

export function WProject(entity : any) : WorkProject {

  let techs = {
    data : []
  }
  entity.technologies.map((tech : any) => {
    techs.data.push(
      {
        data : {
          skill_id : tech.skill_id,
          name : tech.name
        },
        links : {
          related : `/skills/${tech.skill_id}`
        }
      }
    )
  })

  return {
    data : {
      name : entity.name,
      description : entity.description,
      web_uri : entity.web_uri,
      company_id : entity.company_id,
      company_name : entity.company_name,
      technologies : techs,
    }
  }

}

export function ContactResponse( entity : any ) : DeveloperContact {
  
  let data = entity.contact
  
  let response = {
    data : {
      web : data.web,
      email : data.email,
      github : data.github,
      linkedin : data.linkedin,
      twitter : data.twitter,
      instagram : data.instagram
    },
    links : {
      self : `/developers/${entity._id}/contact`
    }
  }

  return response;

}
