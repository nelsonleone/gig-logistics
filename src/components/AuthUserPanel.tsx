"use client"

import { inter } from "@/app/fonts";
import { authUserMenuLinkData } from "@/componentsData/authUserMenuLinkData";
import { ListItemIcon, Menu, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSortDown, FaUserCircle } from "react-icons/fa";
import { AuthUser } from "../../types";
import { useAppDispatch } from "@/redux/customHooks";
import { setAuthUserData } from "@/redux/slices/authUser";

export default function AuthUserPanel({ authUserData }: { authUserData:AuthUser }){

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    useEffect(() => {
        if(authUserData && authUserData?.uid){
            dispatch(setAuthUserData({ beenAuthenticated: true, ...authUserData }))
        }
    },[authUserData?.uid])

    return(
        <div>
            <button
                aria-label="open" 
                onClick={handleClick} 
                id="authUser-panel-button"
                aria-controls={open ? 'authUser-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className="flex gap-2 text-red-600 bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in-out rounded-md p-3"

            >
                <FaUserCircle className="text-2xl xl:3xl" />
                <FaSortDown className="text-xl xl:2xl" />
            </button>
            <Menu
                id="authUser-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'authUser-menu-button',
                }}
                >
                <div>
                    <MenuList>
                        {
                            authUserMenuLinkData.map(val => {
                                const Icon = val.icon;
                                return(
                                    <MenuItem key={val.text} sx={{ p: 0}} className="p-0">
                                        <Link href={val.link} className={`${inter.className} m-0 py-2 px-3 w-full hover:bg-gray-100 focus:bg-gray-100 transition duration-200 ease-linear rounded-sm flex items-center text-gray-800`}>
                                            <ListItemIcon>
                                                <Icon size={20} />
                                            </ListItemIcon>
                                            <span  className={`${inter.className} text-sm font-medium`}>{val.text}</span>
                                        </Link>
                                    </MenuItem>
                                )
                            })
                        }
                    </MenuList>
                </div>
            </Menu>
        </div>
        )
}