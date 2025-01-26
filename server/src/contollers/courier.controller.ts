import { Request, Response} from 'express';
import {AppDataSource} from "@/db/data-source";
import {Courier} from "@/db/entities/Courier.entity";

export async function getCouriers(req: Request, res: Response) {
    const courierRepository = AppDataSource.getRepository(Courier)
    try {
        const couriers = await courierRepository
            .createQueryBuilder("courier")
            .getMany()
        res.status(200).json(couriers);
    }catch (e) {
        res.status(500).json({message: "Failed to get couriers."});
    }

}