import { Module, Global } from "@nestjs/common"
import {MongoClient} from "mongodb";

@Global()
@Module({
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
  exports: ['MONGO']
})
export class DatabaseModule {}
