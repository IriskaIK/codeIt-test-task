import React from "react";
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
    return (
        <>
            <Group align={'flex-end'} grow>
                <DateTimePicker
                    label={'Start date/time'}
                    value={props.startValue}
                    onChange={(value) => props.setStart(value)}
                />


                <DateTimePicker
                    label={'End date/time'}
                    value={props.endValue}
                    onChange={(value) => props.setEnd(value)}
                />


                <Tooltip label={'Exclude deliveries that not fully in date/time range.'}>
                    <Checkbox label={"Strict range"} checked={props.strictRangeValue}
                              onChange={(event) => props.setStrictRange(event.currentTarget.checked)}/>
                </Tooltip>


                <Button onClick={props.getRecords}>
                    Search
                </Button>

            </Group>
        </>
    )
}


export default ControlBar;