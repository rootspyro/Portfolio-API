import { Module, Global } from "@nestjs/common"
//import {MongoClient} from "mongodb";
import { ConfigModule } from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";

@Global()
@Module({
  imports : [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory : () => {
        return {
          uri : process.env.MONGODB_STR,
          dbName : 'API'
        }
      }
    })
  ],
  providers : [
  ],
  exports: [MongooseModule]
})
export class DatabaseModule {}
