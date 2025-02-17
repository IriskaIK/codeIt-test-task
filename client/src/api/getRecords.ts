import config from "config/config";
import Courier from "types/courier.type";
import Destination from "types/destination.type";

export interface Delivery{
    id : number;
    courier: Courier;
    destination : Destination;
    startTime : string;
    endTime : string;
    created_at : string;
    updated_at : string;
}


export async function getRecords(startTime : Date | null, endTime : Date | null, strict : boolean = true) : Promise<{deliveries : Delivery[] }> {
    let startTimeParam =''
    let endTimeParam = ''

    if(startTime){
        startTimeParam = startTime.toISOString()
    }
    if(endTime){
        endTimeParam = endTime.toISOString();
    }


    const queryParams = new URLSearchParams({
        startTime: startTimeParam ? startTimeParam : '',
        endTime: endTimeParam ? endTimeParam : '',
        strict : strict ? 'true' : 'false'
    }).toString();


    try {
        const response = await fetch(`${config.apiUrl}deliveries?${queryParams}`);
        const data = await response.json();

        return data;
    }catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);
        }
        throw new Error();
    }
}