'use client'

import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { setOpenNav } from '@/redux/slices/openNavSlice';
import {IconButton } from '@mui/material';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

export default function MenuIcon(){

    const dispatch = useAppDispatch()
    const { openNav } = useAppSelector(store => store.openNav)


    return(
        !openNav &&
        <IconButton onClick={() => dispatch(setOpenNav(!openNav))} aria-label='Toggle Menu' aria-controls='main-nav'  className='text-3xl text-black'>
            <HiOutlineMenuAlt1  />
        </IconButton>
    )
}