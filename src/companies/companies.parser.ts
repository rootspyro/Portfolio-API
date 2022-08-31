import { CompanyEntity, Companies } from './companies.entities';

export function CompanyResponse( entity : any ) : CompanyEntity {
  return {
    data : {
      id : entity._id,
      attributes : {
        name : entity.name,
        country : entity.country,
        direction : entity.direction,
        description : entity.description,
        contact : entity.contact
      }
    },
    links : {
      self : `/companies/${entity._id}`
    }
  }
}

export function CompaniesResponse( entity : any ) {

  let companies = [];
  entity.map((e : Companies ) => {
    companies.push(CompanyResponse(e));
  });

  let response = { 
    data : companies,
  }

  return response;
  
}
