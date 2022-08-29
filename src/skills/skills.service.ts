import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillsService {

  GetAllSkills() {
    const response = {
      data : [],
      links : {
        self : "/skills"
      }
    }

    return response;
  }
}
