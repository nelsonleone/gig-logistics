import { inter } from "@/app/fonts";
import { MenuItem } from "@mui/base";
import { Menu, ThemeProvider, createTheme } from "@mui/material";
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
                menuItems.map((val,index) => (
                    val.link ?
                    <MenuItem key={index} className={`${inter.className} text-sm font-medium`} onClick={handleClose}>
                      <Link href={val.link}>{val.text}</Link>
                    </MenuItem>
                    :
                    <MenuItem className={`${inter.className} text-sm font-medium`} onClick={handleClose}>{val.text}</MenuItem>
                ))
                :
                <span className={`${inter.className} px-3 text-sm font-medium`} onClick={handleClose}>{usedIn === "notification"  ? "No Unread Notifications" : "Empty"}</span>
            }
        </Menu>
    )
}