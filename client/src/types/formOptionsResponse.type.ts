import Courier from "types/courier.type";
import Destination from "types/destination.type";

export interface FormOptionsResponse {
    couriers : Courier[];
    destinations : Destination[];
}
