import React from "react";
import {Table} from "@mantine/core";
import DeliveryRecord from "types/deliveryRecord.type";

interface TableItemProps {
    item : DeliveryRecord
}


const TableItem: React.FC<TableItemProps> = ({item}) => {

    const parseDateTime = (dateTime : string)=>{

        const date = new Date(dateTime);

        const pad = (num: number) => num.toString().padStart(2, '0');

        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1); // Months are zero-based
        const year = date.getFullYear();
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        return `${day}/${month}/${year} ${hours}:${minutes}`;


        // return date.toLocaleDateString() + " " + date.toLocaleTimeString()
        // return date.getDay()+1 + "/" + date.getMonth()+1 + "/" + date.getFullYear() + " " + date.toLocaleTimeString();
    }


    return (

        <Table.Tr>
            <Table.Td>{item.id}</Table.Td>
            <Table.Td>{item.courier}</Table.Td>
            <Table.Td>{item.destination}</Table.Td>
            <Table.Td>{parseDateTime(item.startTime)}</Table.Td>
            <Table.Td>{parseDateTime(item.endTime)}</Table.Td>
        </Table.Tr>

    )
}

export default TableItem;