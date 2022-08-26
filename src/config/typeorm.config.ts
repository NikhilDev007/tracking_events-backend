import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CRED } from 'src/app.entity';

// connect with database.
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',  // database application 
    host: 'localhost',  // host name where to save.
    port: 5432,   // port where to connect
    username: 'postgres',  // name of the channel 
    password: 'Tiger123@',  // password of channel 
    database: 'subgraphDataManagement',  // name of the database
    entities: [CRED],  // kind od data want to store i.e entities
    synchronize: true  // true: to continuosly synchronise with database.
}