import { inter } from '@/app/fonts';
import { IconButton, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

function XpressDropOffDeliveryItemMenu() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
  

    return (
        <div className='text-[#374151]'>
           <IconButton className='text-[#374151] absolute left-3 top-0 bottom-0 my-auto' aria-label="menu" onClick={handleClick}>
                <BsThreeDotsVertical />
           </IconButton>
            <Menu
                id="xpressDropOff-deliveryItem-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                <MenuItem>
                    <ListItemIcon>
                        <FaTrash />
                    </ListItemIcon>
                    <MenuItem className={`${inter.className}`}>Delete</MenuItem>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default XpressDropOffDeliveryItemMenu;