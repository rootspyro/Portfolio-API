import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { Developers, DevelopersSchema } from './developers.entities';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [ 
    MongooseModule.forFeature([
      {
        name : Developers.name,
        schema : DevelopersSchema
      }
    ])
  ],
  providers: [DevelopersService],
  controllers: [DevelopersController]
})
export class DevelopersModule {}
