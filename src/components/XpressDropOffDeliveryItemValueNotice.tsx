"use client"

import { IconButton, Menu } from "@mui/material";
import { MouseEvent, useState } from "react";
import { TbMessageReport } from "react-icons/tb";

export default function XpressDropOffDeliveryItemValueNotice(){

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return(
        <div className="absolute right-4 top-0">
            <IconButton
              id="xpress-dropoff-deliveryItem-value-report-button"
              aria-controls={open ? 'xpress-dropoff-deliveryItem-value-report-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className="base-color1 bg-gray-500 text-xs hover:bg-gray-500"
            >
              <TbMessageReport />
            </IconButton>
            <Menu
              id="xpress-dropoff-deliveryItem-value-report-menu"
              anchorEl={anchorEl}
              open={open}
              className="min-w-fit p-2 mx-3"
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'xpress-dropoff-deliveryItem-value-report-button',
              }}
            >
              <li className="text-primary text-sm p-2">This information is important because it ensures your shipment against theft and in-transit damages</li>
            </Menu>
        </div>
    )
}