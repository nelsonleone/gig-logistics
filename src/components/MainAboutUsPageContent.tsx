"use client"

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Suspense } from 'react'
import { AboutUsPageContentData } from '../../types'
import DuoSkeleton from './assets/Loaders/DuoSkeleton'

interface IProps {
    className: string,
    aboutPageContentData: AboutUsPageContentData | null
}


export default function MainAboutUsPageContent({ className,aboutPageContentData }:IProps){

    return(
        <Suspense fallback={<DuoSkeleton />}>
            {
                aboutPageContentData ?
                <div className={className}>
                    <div className='md:w-[40em] md:mx-auto lg:w-1/2 '>
                        <Image
                            src={aboutPageContentData?.aboutUsRepImg} 
                            alt={aboutPageContentData?.aboutUsRepImgAlt} 
                            quality={100}
                            width={750}
                            height={750}
                        />
                    </div>

                    <div className="aboutMainContentTextContainer lg:w-1/2">
                        <PortableText value={aboutPageContentData?.mainContent} />
                    </div>
                </div>
                :
                <DuoSkeleton />
            }
        </Suspense>
    )
}