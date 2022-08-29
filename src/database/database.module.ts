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
/*
@Module({
  imports : [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_STR)
  ],
  providers : [
    {
      provide : 'MONGO',
      useFactory : async () => {
        const uri = process.env.MONGODB_STR;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('API');
        return database;
      }
    }
  ],
  exports: ['MONGO', MongooseModule]
})
export class DatabaseModule {}
*/
