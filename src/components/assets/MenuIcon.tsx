'use client'

import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { setOpenNav } from '@/redux/slices/openNavSlice';
import { BiMenu } from 'react-icons/bi';

export default function MenuIcon(){

  const dispatch = useAppDispatch()
  const { openNav } = useAppSelector(store => store.openNav)


  return(
    <button 
      onClick={() => dispatch(setOpenNav(!openNav))} 
      aria-label='Toggle Menu' 
      aria-controls='primary-nav' 
      aria-expanded={openNav ? "true" : "false"} 
      className='absolute left-2 text-[1.9rem] text-base-color2 rounded-full w-12 transition-all duration-200 ease-linear flex justify-center items-center aspect-square lg:hidden hover:shadow-xl hover:bg-gray-100'
      >
        <BiMenu  />
        <span className='AT_only'>Toggle Nav Menu</span>
    </button>
  )
}