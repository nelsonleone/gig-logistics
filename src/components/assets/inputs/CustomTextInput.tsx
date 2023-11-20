import { TextInput, rem } from '@mantine/core';
import classes from './InputValidation.module.css';
import { BiSolidMessageAltError } from "react-icons/bi";

interface IProps {
    error: string,
    label: string,
    value: string | number,
    placeholder: string
}

export default function CustomTextInput(props:IProps){

    const {
        error,
        label,
        placeholder,
        value
    } = props;

    return(
        <TextInput
            label={label}
            error={error ? error : null}
            placeholder={placeholder || value as string}
            defaultValue="hello!gmail.com"
            classNames={{ input: classes.invalid }}
            rightSection={
                <BiSolidMessageAltError
                    style={{ width: rem(18), height: rem(18) }}
                    className={classes.icon}
                />
            }
        />
    )
}