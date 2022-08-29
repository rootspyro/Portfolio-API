export class SkillEntity { 
  id : string;
  attributes : { 
    name : string;
    type : string;
    uri : string;
    repository: string;
    created_int : string;
    description : string;
  };
  links : {
    self : "/skills/:id"
  };
  meta : object;
}
