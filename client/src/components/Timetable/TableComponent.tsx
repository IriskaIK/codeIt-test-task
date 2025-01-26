import React from "react";
import {ScrollArea, Table} from "@mantine/core";
import TableItem from "components/Timetable/TableItem";
import DeliveryRecord from "types/deliveryRecord.type";

interface TableComponentProps {
    records : DeliveryRecord[];
}

const TableComponent: React.FC<TableComponentProps> = ({records}) => {

    return (

        <ScrollArea>
            <Table striped highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Id</Table.Th>
                        <Table.Th>Courier name</Table.Th>
                        <Table.Th>Destination point</Table.Th>
                        <Table.Th>Start date\time</Table.Th>
                        <Table.Th>End date\time</Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    {
                        records.map((record: DeliveryRecord) => {
                            return (
                                <TableItem item={record} key={record.id}/>
                            )
                        })
                    }

                </Table.Tbody>
            </Table>
        </ScrollArea>

    )
}

export default TableComponent;