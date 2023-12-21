import { IconButton } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { IoMdClose } from "react-icons/io"

interface IProps {
    placeholder: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
    id: string,
    containerStyles?: string,
    inputStyles?: string
}

export default function ClearableInput({ placeholder, setValue, id, value, containerStyles, inputStyles }:IProps){
    return(
        <div className={`relative ${containerStyles}`}>
            <input 
               type="text" 
               placeholder={placeholder} 
               onChange={(e) => setValue(e.target.value)}
               value={value} 
               id={id}
               className={`absolute w-full h-full top-0 bottom-0 left-0 right-0 m-auto rounded-md p-4 ${inputStyles}`}
            />
            <IconButton aria-controls={id} aria-describedby={`desc_clearable_input_${id}`} >
                <IoMdClose aria-label="clear" />
            </IconButton>

            <span id={`desc_clearable_input_${id}`}>Clear Input</span>
        </div>
    )
}