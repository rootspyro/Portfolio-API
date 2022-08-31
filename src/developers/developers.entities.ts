import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Models
@Schema({collection : "Developers"})
export class Developers{

  @Prop()
  nickname : string;
  @Prop()
  name : string;
  @Prop()
  lastname : string;
  @Prop()
  birthdate : string;
  @Prop()
  citizenship : string;
  @Prop()
  country : string;
  @Prop()
  region : string;
  @Prop()
  city : string;
  @Prop()
  img_uri : string;
  @Prop({ type : Array })
  studies : [
    {
      type : string;
      title : string;
      institution : string;
      institution_uri : string;
      ubication : string;
      graduation_year: string;
    }
  ];
  @Prop({type : Object })
  skills : {
    frontend : [
      {
        skill_id : string,
        name : string,

      }
    ];
    backend : [

    ];
  }
  @Prop({type : Object })
  experience : {
    role : string;
    years : number;
    jobs: [
      {
        company_id : string;
        company_name : string;
        title : string;
        type_of_work : string;
        position : string;
        entry_date : string;
        retirement_date : string;
      }
    ];
  };
  @Prop({type : Array })
  projects : [
    {
      name : string;
      project_type : string;
      description : string;
      web_uri : string;
      repo_uri : string;
      technologies : [
        {
          skill_id : string;
          name : string;
          level : string;
          icon : string;
        }
      ];
    }
  ];
  @Prop({type : Array })
  contact : object;
  @Prop({type : Array })
  meta : object;

}

export const DevelopersSchema = SchemaFactory.createForClass(Developers);


// RESPONSE ENTITIES 
//

export class DevelopersEntity {
  data : DeveloperSummary[]
}

export class DeveloperSummary {
  data : {
    id : string;
    attributes : {
      nickname : string;
      name : string;
      lastname: string;
      birthdate : string;
      citizenship : string;
      country : string;
      region : string;
      city : string;
      img_uri : string;
    }
  }
  links : {
    self : string;
  }
}

export class DeveloperEntity { 
  data : {
    id : string;
    attributes : {
      nickname : string;
      name : string;
      lastname: string;
      birthdate : string;
      citizenship : string;
      country : string;
      region : string;
      city : string;
      img_uri : string;
      studies : DeveloperStudies;
      skills : DeveloperSkills;
      experience : DeveloperExperience;
      projects : DeveloperProjects;
      contact : DeveloperContact;
    }
  }
  links : {
    self : string;
  }
} 

// STUDIES SCHEMAS

export class DeveloperStudies {
  data : DeveloperStudy[]
  links : {
    self : string;
  }
}

export class DeveloperStudy {
  data : {
    type : string;
    title : string;
    institution : string;
    institution_uri : string;
    ubication : string;
    graduation_year: string;
  }
}

// SKILLS SCHEMAS

export class DeveloperSkills {

  data : {
    frontend : DeveloperSkill;
    backend : DeveloperSkill;
  }
  links : {
    self : string;
    related : string;
  }

}

export class DeveloperSkill {
  data : Tech[]
  links : {
    self : string;
  }
}

class Tech {
  data : {
    name : string;
    level : string;
    icon : string;
  }
  links : {
    related : string;
  }
}

// EXPERIENCE SCHEMAS

export class DeveloperExperience {
  data : {
    role : string,
    years: number,
    jobs : DeveloperJob[]
  }
  links : {
    self : string;
    related : string;
  }
}

export class DeveloperJob {
  data : {
    company_id : string;
    company_name : string;
    title : string;
    type_of_work : string;
    position : string;
    entry_date : string;
    retirement_date : string;
  }
  links : {
    related : string;
  }
  meta : object;
}

// PROJECTS SCHEMAS

export class DeveloperProjects { 
  data : DeveloperProject[]
  links : {
    self : string;
  }
}

export class DeveloperProject {
  data : {
    name : string;
    project_type : string;
    description : string;
    web_uri : string;
    repo_uri : string;
    technologies : ProjectTechs
  }
  meta : object;
}

export class ProjectTechs {
  data : ProjectTech[]
  links : {
    self : string;
    related : string;
  }
}

export class ProjectTech {
  data : { 
    skill_id : string;
    name : string;
  }
  links : {
    related : string;
  }
}

// CONTACT SCHEMAS 

export class DeveloperContact {
  data : {
    web : string;
    email : string;
    github : string;
    linkedin : string;
    twitter : string;
    instagram : string;
  }
  links : {
    self : string;
  }
}
