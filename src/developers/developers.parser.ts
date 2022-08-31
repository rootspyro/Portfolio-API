import { 
  DevelopersEntity,
  DeveloperEntity,
  DeveloperStudies, 
  DeveloperExperience, 
  DeveloperSkills,
  DeveloperSkill,
  DeveloperProjects,
  DeveloperContact
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

  entity.experience.jobs.map((job: any) => {
    jobs.push(
      {
        data : {
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
    data : jobs,
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
          icon : skill.icon
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
          icon : skill.icon
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

  let projects = [];

  entity.projects.map((project : any) => {

    let data =
      {
        data : {
          name : project.name,
          project_type : project.project_type,
          description : project.description,
          web_uri : project.web_uri,
          repo_uri : project.repo_uri,
          technologies : []
        },
        meta : project.meta
      }

    project.technologies.map((tech : any) => {
      data.data.technologies.push({
        data : {
          name : tech.name
        },
        links : {
          related : `/skills/${tech.skill_id}`
        }
      }) 
    })

    projects.push(data);
  })

  let response = {
    data : projects,
    links : {
      self : `/developers/${entity._id}/projects`
    }
  }
  return response;
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
