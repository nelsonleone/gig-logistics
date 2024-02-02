import Link from 'next/link'
import { inter, roboto_slab } from './fonts'
import { Metadata } from 'next'
import { Container, SimpleGrid } from '@mantine/core'
import Image from 'next/image'
import classes from '../LibCSSModules/NotFoundImage.module.css';

export const metadata : Metadata = {
  title: "404 - Page Not Found | GIGL"
} 
 
export default function NotFound() {
  return (
    <div className="page">
      <div className="flex justify-center items-center h-screen w-full my-10">
        <Container className={classes.root}>
          <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
            <Image src="/images/not-found-page-img.svg" alt="" aria-hidden="true" width={400} height={400} className={classes.mobileImage} />
            <div>
              <h1 className={`${classes.h1} ${roboto_slab.className} text-3xl my-5 font-bold`}>Something is not right...</h1>
              <p className={inter.className}>
                Page you are trying to open does not exist. You may have mistyped the address, or the
                page has been moved to another URL. If you think this is an <span className="text-red-500">error</span> contact support.
              </p>
              <Link href="/"  className={`${classes.control} bg-black p-4 text-center inline-block my-5 text-white focus:border focus:border-black focus:text-black focus:bg-transparent transition duration-300 ease-in-out hover:border hover:border-black hover:text-black hover:bg-transparent`}>
                Get back to home page
              </Link>
            </div>
            <Image src="/images/not-found-page-img.svg" alt="" aria-hidden="true" width={400} height={400} className={classes.desktopImage} />
          </SimpleGrid>
        </Container>
      </div>
    </div>
  )
}