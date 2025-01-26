import {DeliveryCreateRecordDto} from "@/contollers/dto/delivery-create-record.dto";

export function validateCreateRecord(body : DeliveryCreateRecordDto){
    const {courier_id, destination_id, startTime, endTime} = body

    if (!courier_id || !destination_id || !startTime || !endTime) {
        return {valid : false, message: 'All fields are required.'};
    }

    const [startDateTime, endDateTime] = [new Date(startTime), new Date(endTime)];

    if(startDateTime >= endDateTime){
        return {valid : false, message: 'Start time could not be later than end time.'};
    }


    return {valid: true, message: ''};

}