import { inter } from "@/app/fonts";
import { MenuItem } from "@mui/base";
import { Menu } from "@mui/material";
import Link from "next/link";

interface IProps {
    open: boolean,
    anchorEl: null | HTMLElement,
    handleClose: () => void,
    menuItems: {
        text: string,
        link?: string
    }[],
    id: string,
    buttonId: string,
    styles?: string,
    usedIn: "notification"
}

export default function CustomBasicMenu({ open, handleClose, styles, anchorEl, id, usedIn, menuItems, buttonId }:IProps){
    return(
        <Menu
            className={`${inter.className} ${styles}`}
            id={id}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': buttonId,
            }}
        >
            {
                menuItems.length ?
                menuItems.map(val => (
                    val.link ?
                    <Link href={val.link}>
                        <MenuItem onClick={handleClose}>{val.text}</MenuItem>
                    </Link>
                    :
                    <MenuItem onClick={handleClose}>{val.text}</MenuItem>
                ))
                :
                <MenuItem onClick={handleClose}>{usedIn === "notification"  ? "No Unread Notifications" : "Empty"}</MenuItem>
            }
      </Menu>
    )
}