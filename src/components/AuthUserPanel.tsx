import { authUserMenuLinkData } from "@/componentsData/authUserMenuLinkData";
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import { FaSortDown, FaUserCircle } from "react-icons/fa";

export default function AuthUserPanel(){

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
                aria-label="open" 
                onClick={handleClick} 
                id="authUser-panel-button"
                aria-controls={open ? 'authUser-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <FaUserCircle />
                <FaSortDown />
            </IconButton>
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
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText>Cut</ListItemText>
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