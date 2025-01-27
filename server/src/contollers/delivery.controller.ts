import {Request, Response, NextFunction} from 'express';
import {DeliveryCreateRecordDto} from "@/contollers/dto/delivery-create-record.dto";
import {FetchDeliveriesByDateQueryParams} from "@/contollers/interfaces/fetchDeliveriesByDateQueryParams";
import {assignNewDelivery, getDeliveriesByDate} from "@/services/delivery.service";
import CustomError from "@/utils/errors/CustomError";
import {validateCreateRecord} from "@/utils/validators/createRecord.validator";
import validateGetRecords from "@/utils/validators/getRecords.validator";
import {AppDataSource} from "@/db/data-source";
import {Courier} from "@/db/entities/Courier.entity";
import {Destination} from "@/db/entities/Destination.entity";


export async function createDeliveryRecord(req: Request<{}, {}, DeliveryCreateRecordDto>, res: Response, next: NextFunction) {


    console.log(req.body)

    const validation = validateCreateRecord(req.body)

    if (!validation.valid) {
        res.status(400).send({message: validation.message})
        return;
    }

    const {courier_id, destination_id, startTime, endTime} = req.body;

    try {
        const newRecord = await assignNewDelivery(courier_id, destination_id, startTime, endTime);

        res.status(201).json({message: 'Delivery added successfully.', record: newRecord})
        return;
    } catch (error) {

        if (error instanceof CustomError) {
            res.status(400).json({message: error.message})
            return;
        }

        res.status(500).json({something: 'Something went wrong'})
        return;
    }

}

export async function getDeliveries(req: Request<{}, {}, {}, FetchDeliveriesByDateQueryParams>, res: Response, next: NextFunction) {
    const {startTime, endTime, strict} = req.query
    const validation = validateGetRecords(req.params);

    if (!validation.valid) {
        res.status(400).send({message: validation.message})
        return;
    }

    try {
        const deliveries = await getDeliveriesByDate(startTime, endTime, strict)
        res.status(200).json({deliveries: deliveries})
        return;
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Something went wrong.'})
        return;
    }

}



export async function getOptions(req : Request, res : Response){
    const courierRepository = AppDataSource.getRepository(Courier)
    const destinationRepository = AppDataSource.getRepository(Destination)
    try {
        const destinations = await destinationRepository
            .createQueryBuilder("destination")
            .getMany()
        const couriers = await courierRepository
            .createQueryBuilder("courier")
            .getMany()
        res.status(200).json({destinations, couriers});
    }catch (e) {
        res.status(500).json({message: "Failed to get options."});
    }

}


export async function getDeliveryById(req: Request, res: Response, next: NextFunction) {

}

export async function getDeliveriesByDestination(req: Request, res: Response, next: NextFunction) {

}

export async function getDeliveriesByCourier(req: Request, res: Response, next: NextFunction) {

}