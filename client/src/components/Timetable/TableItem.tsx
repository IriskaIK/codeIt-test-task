import React from "react";
import {Table} from "@mantine/core";
import DeliveryRecord from "types/deliveryRecord.type";

interface TableItemProps {
    item : DeliveryRecord
}


const TableItem: React.FC<TableItemProps> = ({item}) => {

    const parseDateTime = (dateTime : string)=>{
        const date = new Date(dateTime);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
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