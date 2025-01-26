import createDeliveryRecord from "api/createDeliveryRecord";

export interface FormContent {
    courier: string;
    destination: string;
    startTime: string;
    endTime: string;
}


export async function submitForm(content : FormContent){
    try {
        await createDeliveryRecord({
            courier_id : +content.courier,
            destination_id : +content.destination,
            startTime : content.startTime,
            endTime : content.endTime
        })
        return {status : "success", message : ""}
    }catch(error){
        if(error instanceof Error){
            return {status : "failure", message : error.message};
        }
        return {status : "failure", message : "Server error."};
    }

}