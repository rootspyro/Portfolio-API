import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Skills, SkillsSchema } from './skills.entities';

@Module({
  imports : [MongooseModule.forFeature([
    {
      name: Skills.name,
      schema: SkillsSchema
    }
  ])],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
