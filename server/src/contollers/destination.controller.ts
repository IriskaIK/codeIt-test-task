import { Request, Response} from 'express';
import {AppDataSource} from "@/db/data-source";
import {Destination} from "@/db/entities/Destination.entity";

export async function getDestinations(req: Request, res: Response) {
    const courierRepository = AppDataSource.getRepository(Destination)
    try {
        const destinations = await courierRepository
            .createQueryBuilder("destination")
            .getMany()
        res.status(200).json(destinations);
    }catch (e) {
        res.status(500).json({message: "Failed to get destinations."});
    }

}