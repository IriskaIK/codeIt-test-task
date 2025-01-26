import React, {useEffect, useState} from "react";
import {Center, Container, Loader, Space} from "@mantine/core";
import ControlBar from "components/Timetable/ControlBar";
import TableComponent from "components/Timetable/TableComponent";
import DeliveryRecord from "types/deliveryRecord.type";
import {getRecords} from "api/getRecords";
import mapRecords from "components/Timetable/services/mapRecords";

const Timetable: React.FC = () => {
    const [records, setRecords] = useState<DeliveryRecord[]>([])
    const [startDate, setStartDate] = useState<Date | null>(null)


    const [strictRange, setStrictRange] = useState<boolean>(false)


    const [endDate, setEndDate] = useState<Date | null>(null)
    const [loading, setLoading] = useState(false)


    const fetchRecords = async () => {
        try {
            setLoading(true)
            const response = await getRecords(startDate, endDate);
            setRecords(mapRecords(response.deliveries))
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchRecords();
    }, [])


    return (
        <>
            <Container size={'xl'}>
                <ControlBar startValue={startDate}
                            endValue={endDate}
                            setStart={setStartDate}
                            setEnd={setEndDate}
                            getRecords={fetchRecords}
                            strictRangeValue={strictRange}
                            setStrictRange={setStrictRange}
                />
                <Space h={'lg'}/>

                {
                    loading ? (
                        <Center>
                            <Loader color="blue" type="dots"/>
                        </Center>
                    ) : <TableComponent records={records}/>
                }


            </Container>
        </>
    )
}


export default Timetable;