"use client"

import { inter } from "@/app/fonts";
import { authUserMenuLinkData } from "@/componentsData/authUserMenuLinkData";
import { Avatar, ListItemIcon, Menu, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { AuthUser } from "../../types";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setAuthUserData, setSignOutAuthUser } from "@/redux/slices/authUser";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity } from "@/enums";
import { setShowRingLoader } from "@/redux/slices/ringLoaderSlice";
import { red } from "@mui/material/colors";
import { useRouter } from "next/navigation";

export default function AuthUserPanel({ authUserData }: { authUserData:AuthUser | undefined }){

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { picture, firstName } = useAppSelector(store => store.authUser)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    const handleLinkClick = async(e:MouseEvent<HTMLAnchorElement>,link:string) => {
        const signOutLink = "/api/auth/sign_out";
        if(link === signOutLink){
            e.preventDefault()

            try{
                dispatch(setShowRingLoader(true))
                await fetch(signOutLink,{
                    method: "POST"
                })

                dispatch(setSignOutAuthUser())

                router.refresh()
            }

            catch(err:any|unknown){
                dispatch(setShowAlert({
                    mssg: err.message || "An Error Occurred Whiling During Sign-Out",
                    severity: AlertSeverity.ERROR
                }))
            }
            finally{
                dispatch(setShowRingLoader(false))
            }
        }
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
                <Avatar sx={{ bgcolor: red[500], width: 30, height: 30 }} src={picture || authUserData?.picture } alt={firstName.slice(0) || authUserData?.firstName.slice(0)}>{firstName.slice(0) || authUserData?.firstName.slice(0)}</Avatar>
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
                                        <Link href={val.link} onClick={(e) => handleLinkClick(e,val.link)} className={`${inter.className} m-0 py-2 px-3 w-full hover:bg-gray-100 focus:bg-gray-100 transition duration-200 ease-linear rounded-sm flex items-center text-gray-800`}>
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