'use client'

import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { setOpenNav } from '@/redux/slices/openNavSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { BiMenu } from 'react-icons/bi';

export default function MenuIcon(){

    const dispatch = useAppDispatch()
    const { openNav } = useAppSelector(store => store.openNav)


    return(
        <AnimatePresence>
            !openNav &&
            <motion.button 
              exit={{ x: -300, transition: { duration: .3, ease: "easeInOut" } }}
              onClick={() => dispatch(setOpenNav(!openNav))} 
              aria-label='Toggle Menu' 
              aria-controls='primary-nav' 
              aria-expanded={openNav ? "true" : "false"} 
              className='text-3xl text-black rounded-full w-12 transition-all duration-200 ease-linear flex justify-center items-center aspect-square lg:hidden hover:shadow-xl'
              >
                <BiMenu  />
                <span className='AT_only'>Toggle Nav Menu</span>
            </motion.button>
        </AnimatePresence>
    )
}