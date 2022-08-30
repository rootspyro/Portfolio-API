import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { DevelopersModule } from './developers/developers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SkillsModule,
    DatabaseModule,
    CompaniesModule,
    DevelopersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

