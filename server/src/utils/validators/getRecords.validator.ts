import {FetchDeliveriesByDateQueryParams} from "@/contollers/interfaces/fetchDeliveriesByDateQueryParams";

export default function validateGetRecords(queryParams: FetchDeliveriesByDateQueryParams) {
    const {startTime, endTime} = queryParams

    if(startTime && endTime && new Date(startTime) > new Date(endTime)){
        return {valid : false, message : "Start time cannot be later than end time."}
    }

    return {valid : true, message : ""}

}