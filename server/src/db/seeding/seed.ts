import 'reflect-metadata'
import config from "@/config/config";
import {DataSource, DataSourceOptions} from "typeorm";
import {runSeeders, SeederOptions} from "typeorm-extension";
import {Courier} from "@/db/entities/Courier.entity";
import {Destination} from "@/db/entities/Destination.entity";
import CouriersSeeder from "@/db/seeding/couriers.seeder";
import DestinationsSeeder from "@/db/seeding/destinations.seeder";

const {host, port, user, password, database} = config.db


const options : DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: host ,
    port: +port,
    username: user ,
    password: password,
    database: database,
    entities: [Courier, Destination],
    seeds: [CouriersSeeder, DestinationsSeeder],
}

const dataSource = new DataSource(options);
dataSource.initialize().then(async ()=>{
    await dataSource.synchronize(true)
    await runSeeders(dataSource)

    console.log('Seeding complete...')

    process.exit(0)
})

