import {FormOptionsResponse} from "types/formOptionsResponse.type";

export default function mapOptions (options: FormOptionsResponse) {
    const couriers = options.couriers.map((element) => ({
        value: element.id.toString(),
        label: element.name,
    }))
    const destinations = options.destinations.map((element) => ({
        value: element.id.toString(),
        label: element.address
    }))

    return {couriers, destinations}
}