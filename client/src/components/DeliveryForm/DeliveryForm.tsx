import React, {useEffect, useState} from "react";
import {Card, Container, Select, Space} from "@mantine/core";
import {useForm} from "@mantine/form";
import {DateTimePicker} from "@mantine/dates";
import {getFormOptions} from "api/getFormOptions";
import ControlButtons from "components/DeliveryForm/ControlButtons";
import mapOptions from "components/DeliveryForm/services/mapOptions";
import {FormContent, submitForm} from "components/DeliveryForm/services/submitForm";
import ValidationError from "components/DeliveryForm/ValidationError";


const DeliveryForm: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [courierOptions, setCourierOptions] = useState<{ value: string; label: string }[]>([]);
    const [destinationOptions, setDestinationOptions] = useState<{ value: string; label: string }[]>([]);
    const [serverValidationError, setServerValidationError] = useState<string>('');


    const form = useForm({
        mode: 'uncontrolled',
        validateInputOnChange: true,
        initialValues: {
            courier: '',
            destination: '',
            startTime: '',
            endTime: '',
        },

        validate: {
            courier: (value) => (value ? null : "Courier is required."),
            destination: (value) => (value ? null : "Destination is required."),
            startTime: (value) => {
                if (!value) return "Start time is required.";
                if (isNaN(new Date(value).getTime())) return "Invalid start time.";
                return null;
            },
            endTime: (value, values) => {
                if (!value) return "End time is required.";
                const endDate = new Date(value);
                const startDate = new Date(values.startTime);
                if (isNaN(endDate.getTime())) return "Invalid end date and time.";
                if (endDate <= startDate) return "End date and time must be after the start date and time.";
                return null;
            }
        }
    })

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                setLoading(true)

                const options = await getFormOptions();

                const {couriers, destinations} = mapOptions(options)
                setCourierOptions(couriers)
                setDestinationOptions(destinations)

                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        fetchOptions();
    }, [])

    const  handleFormSubmit = async (values : FormContent) =>{
        const response = await submitForm(values)
        if(response.status !== 'success'){
            setServerValidationError(response.message)
            return;
        }
        form.reset()
        setServerValidationError('')
    }

    const handleClearForm = async (): Promise<void> => {
        form.reset()
        setServerValidationError('')
    }

    return (
        <>
            <Container size='sm'>
                <form onSubmit={form.onSubmit(async (values) => handleFormSubmit(values))}>

                    <Card padding='lg'>

                        <Select
                            data={courierOptions}
                            label="Courier"
                            key={form.key('courier')}
                            {...form.getInputProps('courier')}
                            searchable
                            disabled={loading}
                        />

                        <Select
                            data={destinationOptions}
                            label="Destination"
                            key={form.key('destination')}
                            {...form.getInputProps('destination')}
                            searchable
                            disabled={loading}
                        />

                        <DateTimePicker
                            label="Delivery start date/time"
                            key={form.key('startTime')}
                            {...form.getInputProps('startTime')}
                        />

                        <DateTimePicker
                            label="Delivery end date/time"
                            key={form.key('endTime')}
                            {...form.getInputProps('endTime')}
                        />
                        <Space h='xl'/>
                        {
                            serverValidationError && (
                                <ValidationError message={serverValidationError}/>
                            )
                        }
                        <ControlButtons form={form} handleClear={handleClearForm} />
                    </Card>


                </form>
            </Container>


        </>
    )
}


export default DeliveryForm;