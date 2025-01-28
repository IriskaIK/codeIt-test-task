import React, {useEffect, useState} from "react";
import {Button, Checkbox, Group, Tooltip} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";

interface ControlBarProps {
    startValue: Date | null;
    endValue: Date | null;

    setStart: React.Dispatch<React.SetStateAction<Date | null>>;
    setEnd: React.Dispatch<React.SetStateAction<Date | null>>;

    getRecords: () => Promise<void>;
    strictRangeValue: boolean;
    setStrictRange: React.Dispatch<React.SetStateAction<boolean>>
}

const ControlBar: React.FC<ControlBarProps> = (props) => {
    const [isValid, setIsValid] = useState<boolean>(true)

    useEffect(() => {
        if (props.startValue && props.endValue && props.startValue > props.endValue) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [props.startValue, props.endValue]);


    return (
        <>
            <Group align={'flex-end'} grow>
                <DateTimePicker
                    label={'Start date/time'}
                    value={props.startValue}
                    onChange={(value) => props.setStart(value)}
                    error={isValid ? null : "Invalid date"}
                />


                <DateTimePicker
                    label={'End date/time'}
                    value={props.endValue}
                    onChange={(value) => props.setEnd(value)}
                    error={isValid ? null : "Invalid date"}
                />


                <Tooltip label={'Exclude deliveries that not fully in date/time range.'}>
                    <Checkbox label={"Strict range"} checked={props.strictRangeValue}
                              onChange={(event) => props.setStrictRange(event.currentTarget.checked)}/>
                </Tooltip>


                <Button onClick={props.getRecords} disabled={!isValid}>
                    Search
                </Button>

            </Group>
        </>
    )
}


export default ControlBar;