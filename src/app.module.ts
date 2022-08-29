import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
