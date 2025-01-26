import {Delivery} from "api/getRecords";
import DeliveryRecord from "types/deliveryRecord.type";

export default function mapRecords(deliveries : Delivery[]) : DeliveryRecord[]{
    return deliveries.map(item => ({
        id: item.id,
        courier: item.courier.name,
        destination : item.destination.address,
        endTime : item.endTime,
        startTime : item.startTime
    }))
}