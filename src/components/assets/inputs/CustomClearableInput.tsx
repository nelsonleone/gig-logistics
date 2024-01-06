import { IconButton } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { IoMdClose } from "react-icons/io"

interface IProps {
    placeholder: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
    id: string,
    containerStyles?: string,
    inputStyles?: string,
}

export default function ClearableInput({ placeholder, setValue, id, value, containerStyles, inputStyles }:IProps){
    return(
        <div className={`bg-gray-100 relative min-h-[3.2em] } w-full rounded-lg overflow-hidden ${containerStyles}`}>
            <input 
               type="text" 
               placeholder={placeholder} 
               onChange={(e) => setValue(e.target.value)}
               value={value} 
               id={id}
               className={`focus:border focus:border-emerald-700 rounded-lg focus:outline-none focus:outline-0  absolute w-full h-full top-0 bottom-0 left-0 right-0 m-auto py-6 px-4  ${inputStyles}`}
            />
            {
                value &&
                <IconButton onClick={() => setValue("")} className="absolute top-0 bottom-0 my-auto right-2 text-base" aria-controls={id} aria-describedby={`desc_clearable_input_${id}`} >
                    <IoMdClose aria-label="clear" />
                </IconButton>
            }

            <span id={`desc_clearable_input_${id}`}>Clear Input</span>
        </div>
    )
}