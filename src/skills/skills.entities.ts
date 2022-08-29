export class SkillEntity { 
  id : string;
  attributes : { 
    name : string;
    type : string;
    uri : string;
    repository: string;
    created_in : string;
    description : string;
  };
  links : {
    self : string
  };
  meta : object;
}
