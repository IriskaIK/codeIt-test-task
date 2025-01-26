import React from "react";
import {Space, Text} from "@mantine/core";


interface ValidationErrorProps {
    message : string;
}

const ValidationError : React.FC<ValidationErrorProps> = ({message}) => {

    return (
        <>
            <Text c={'red'}>
                {message}
            </Text>
            <Space h='xl'/>
        </>
    )
}

export default ValidationError;