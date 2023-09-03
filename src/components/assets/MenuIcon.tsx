'use client'

import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { setOpenNav } from '@/redux/slices/openNavSlice';
import {IconButton } from '@mui/material';
import { BiMenu } from 'react-icons/bi';

export default function MenuIcon(){

    const dispatch = useAppDispatch()
    const { openNav } = useAppSelector(store => store.openNav)


    return(
        !openNav &&
        <IconButton onClick={() => dispatch(setOpenNav(!openNav))} aria-label='Toggle Menu' aria-controls='primary-nav' aria-expanded={openNav ? "true" : "false"} className='text-3xl text-black rounded-full w-12 lg:hidden'>
            <BiMenu  />
        </IconButton>
    )
}