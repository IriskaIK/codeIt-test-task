import {DataSource} from "typeorm";
import {Destination} from "@/db/entities/Destination.entity";
import {Seeder} from "typeorm-extension";


const destinations : Partial<Destination>[] = [
    {
        address : 'Address 1'
    },
    {
        address : 'Address 2'
    },
    {
        address : 'Address 3'
    },
]


export default class DestinationsSeeder implements Seeder{
    track = false

    public async run(
        dataSource : DataSource,
    ){
        const repository = dataSource.getRepository(Destination);
        await repository.insert(destinations)
    }
}
