import {Courier} from "@/db/entities/Courier.entity";
import {DataSource} from "typeorm";
import {Seeder} from "typeorm-extension";

const couriers : Partial<Courier>[] = [
    {
        name : 'Courier 1'
    },
    {
        name : 'Courier 2'
    },
    {
        name : 'Courier 3'
    },
]
export default class CouriersSeeder implements Seeder{
    track = false

    public async run(
        dataSource : DataSource,
    ){
        const repository = dataSource.getRepository(Courier);
        await repository.insert(couriers)
    }
}
