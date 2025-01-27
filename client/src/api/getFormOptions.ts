import config from "config/config";
import {FormOptionsResponse} from "types/formOptionsResponse.type";

export async function getFormOptions(): Promise<FormOptionsResponse>{
    try{
        const response = await fetch(config.apiUrl+'deliveries/options/');
        const data = await response.json();

        return data;
    }catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);
        }
        throw new Error();
    }
}