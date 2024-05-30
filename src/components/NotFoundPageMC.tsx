'use client'

import Link from 'next/link'
import { Container, SimpleGrid, MantineProvider } from '@mantine/core'
import Image from 'next/image'
import classes from '@/LibCSSModules/NotFoundImage.module.css';
import { inter, roboto_slab } from '@/app/fonts';

export default function NotFoundPageMC(){
    return(
        <div className="flex justify-center items-center h-screen w-full">
            <MantineProvider>
                <div className="grid grid-col-1 gap-8 md:grid-col-2">
                    <Image src="/images/not-found-page-img.svg" alt="" aria-hidden="true" width={400} height={400} />
                    <div className="md:order-1">
                        <h1 className={`${classes.h1} ${roboto_slab.className} text-3xl my-5 font-bold`}>Something is not right...</h1>
                        <p className={inter.className}>
                        Page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an <span className="text-primary2">error</span> contact support.
                        </p>
                        <Link href="/"  className={`${classes.control} bg-base-color2 p-4 text-center inline-block my-5 text-base-color1 focus:border focus:border-black focus:text-black focus:bg-transparent transition duration-300 ease-in-out hover:border hover:border-black hover:base-color2 hover:bg-transparent`}>
                        Get back to home page
                        </Link>
                    </div>
                </div>
            </MantineProvider>
      </div>
    )
}