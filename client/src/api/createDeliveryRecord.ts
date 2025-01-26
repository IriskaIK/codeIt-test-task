import config from "config/config";

interface CreateDeliveryRecord {
    courier_id : number;
    destination_id : number;
    startTime : string;
    endTime : string;

}


export default async function createDeliveryRecord(body : CreateDeliveryRecord){
    try{
        const response = await fetch(config.apiUrl+'deliveries/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(body),
        })

        if(response.status !== 201){
            const responseBody = await response.json();
            if(responseBody.message){
                throw new Error(responseBody.message);
            }
            throw new Error("Server not responding.");
        }
    }catch(error){
        if(error instanceof Error){
            throw Error(error.message);
        }
    }
};