import {AppDataSource} from "@/db/data-source";
import {Delivery} from "@/db/entities/Delivery.entity";
import {Courier} from "@/db/entities/Courier.entity";
import {Destination} from "@/db/entities/Destination.entity";
import InvalidRequestError from "@/utils/errors/InvalidRequest.error";
import InternalServerError from "@/utils/errors/InternalServer.error";
import {validate} from "class-validator";

export async function getDeliveriesByDate(startTime?: string, endTime?: string, strict?: 'true' | 'false') {
    const deliveriesRepository = AppDataSource.getRepository(Delivery)
    const queryBuilder = deliveriesRepository
        .createQueryBuilder("deliveries")
        .leftJoinAndSelect('deliveries.courier', 'courier')
        .leftJoinAndSelect('deliveries.destination', 'destination')


    if(strict === 'true'){
        if (startTime) {
            queryBuilder.where("deliveries.startTime >= :startTime", {startTime})
        }
        if (endTime) {
            queryBuilder.andWhere("deliveries.endTime <= :endTime", {endTime})
        }
    }else{

        if (startTime && endTime) {
            queryBuilder.where("deliveries.startTime >= :startTime AND deliveries.startTime <= :endTime", {startTime, endTime})
                .orWhere("deliveries.endTime <= :endTime AND deliveries.endTime >= :startTime", {startTime, endTime})
        }else if (endTime) {
            queryBuilder.andWhere("deliveries.startTime <= :endTime", {endTime})
        }else if(startTime){
            queryBuilder.andWhere("deliveries.endTime >= :startTime", {startTime})
        }
    }

    return await queryBuilder.orderBy('deliveries.startTime').getMany()
}


async function checkForOverlapping(courier_id: number, startTime: string, endTime: string): Promise<boolean> {
    const deliveryRepository = AppDataSource.getRepository(Delivery)
    const overlappingEntry = await deliveryRepository
        .createQueryBuilder('entry')
        .where('entry.courier_id = :courier_id', {courier_id: courier_id})
        .andWhere('(entry.startTime < :endTime AND entry.endTime > :startTime)', {
            startTime: startTime,
            endTime: endTime
        })
        .getOne()

    return !!overlappingEntry;

}


export async function assignNewDelivery(courier_id: number, destination_id: number, startTime: string, endTime: string) {
    const deliveryRepository = AppDataSource.getRepository(Delivery)
    let overlappingEntry;
    try {
        overlappingEntry = await checkForOverlapping(courier_id, startTime, endTime)
    } catch (error) {
        throw new InternalServerError("Failed while accessing database.")
    }

    if (overlappingEntry) {
        throw new InvalidRequestError("Courier already assigned with delivery at given time.")
    }

    const courier = await AppDataSource.getRepository(Courier).findOne({where: {id: courier_id}})
    const destination = await AppDataSource.getRepository(Destination).findOne({where: {id: destination_id}})

    if (!courier || !destination) {
        throw new InvalidRequestError("Courier or Destination not found.")
    }

    const newRecord = new Delivery()
    newRecord.courier = courier
    newRecord.destination = destination
    newRecord.startTime = new Date(startTime);
    newRecord.endTime = new Date(endTime);

    const errors = await validate(newRecord);
    if (errors.length > 0) {
        throw new InvalidRequestError("Invalid record information.")
    }

    await deliveryRepository.save(newRecord)

    return newRecord;
}