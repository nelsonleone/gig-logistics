"use client"

import { IconButton } from "@mui/material";
import CustomBasicMenu from "./assets/PopUps/CustomBasicMenu";
import { MdNotifications } from "react-icons/md";
import { useState } from "react";

export default function Notification(){

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return(
        <div>
            <IconButton 
               aria-label="notification" 
               onClick={handleClick} 
               id="notification-custom-menu-button"
               aria-controls={open ? 'notification-custom-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               >
                <span className="AT_only">See Notifications</span>
                <MdNotifications />
            </IconButton>

            <CustomBasicMenu 
               buttonId="notification-custom-menu-button" 
               id="notification-custom-menu" 
               anchorEl={anchorEl} 
               open={open} 
               handleClose={handleClose} 
               menuItems={[]}
               usedIn="notification"
            />
        </div>
    )
}