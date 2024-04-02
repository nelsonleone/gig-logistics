import { inter } from '@/app/fonts';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { XpressDropOffInfo } from '../../types';

function XpressDropOffDeliveryItemMenu({ index, control, setValue, setBeingDeleted }:{ control: Control<XpressDropOffInfo,undefined>, setBeingDeleted: Dispatch<SetStateAction<boolean>>, index:number, setValue: UseFormSetValue<XpressDropOffInfo> }) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    const deliveryItem = useWatch({ control, name: 'deliveryItems'})

    const handleDeleteDeliveryItem = async() => {
        setBeingDeleted(true)
        await new Promise((resolve) => setTimeout(resolve, 3000))
        const updatedDeliveryItems = [...deliveryItem]
        updatedDeliveryItems.splice(index, 1)
        setValue('deliveryItems',updatedDeliveryItems)
        setBeingDeleted(false)
    }
  

    return (
        <div className='text-primary justify-self-end absolute -right-3 col-span-1'>
           <IconButton className='text-primary text-sm md:text-base'  aria-label="menu" onClick={handleClick}>
                <BsThreeDotsVertical />
           </IconButton>
            <Menu
                id="xpressDropOff-deliveryItem-menu"
                anchorEl={anchorEl}
                open={open}
                className="p-0"
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                <button onClick={handleDeleteDeliveryItem} className={`${inter.className} items-center cursor-pointer hover:bg-gray-200 h-full w-full flex justify-start gap-2 p-1 text-sm text-primary`}>
                    <FaTrash aria-label="delete" color='text-primary' />
                    <span>Delete</span>
                </button>
            </Menu>
        </div>
    )
}

export default XpressDropOffDeliveryItemMenu;