import {Button, Group} from "@mantine/core";
import React from "react";
import {UseFormReturnType} from "@mantine/form";
import FormType from "types/form.type";

interface ControlButtonProps {
    form : UseFormReturnType<FormType>
    handleClear : () => void
}


const ControlButtons : React.FC<ControlButtonProps> = ({form, handleClear}) =>{

    return (
        <>
            <Group>
                <Button color='green' disabled={!form.isValid()} type='submit'>
                    Submit
                </Button>
                <Button color='red' onClick={handleClear}>
                    Clear
                </Button>
            </Group>
        </>
    )
}


export default ControlButtons;