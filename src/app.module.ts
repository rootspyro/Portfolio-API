import { Module } from '@nestjs/common';
import { SkillsModule } from './skills/skills.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { DevelopersModule } from './developers/developers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    DevelopersModule,
    CompaniesModule,
    SkillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

