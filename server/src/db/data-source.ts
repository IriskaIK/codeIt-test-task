import {DataSource} from "typeorm";
import config from "@/config/config";
import {Courier} from "@/db/entities/Courier.entity";
import {Delivery} from "@/db/entities/Delivery.entity";
import {Destination} from "@/db/entities/Destination.entity";

export const AppDataSource = new DataSource({
    type : "postgres",
    host: config.db.host,
    port: +config.db.port,
    username : config.db.user,
    password: config.db.password,
    database: config.db.database,
    synchronize : true,
    logging : config.nodeEnv === 'development',
    entities : [Courier, Delivery, Destination],
    subscribers : [],
    migrations : []
})