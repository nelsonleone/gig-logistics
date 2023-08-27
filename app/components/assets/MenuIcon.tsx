import {IconButton } from '@mui/material';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

export default function MenuIcon(){
    return(
        <IconButton aria-label='Toggle Menu' aria-controls='main-nav'  className='text-3xl text-black'>
            <HiOutlineMenuAlt1  />
        </IconButton>
    )
}