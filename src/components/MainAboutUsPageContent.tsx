import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Suspense } from 'react'
import CustomSkeleton from './assets/Loaders'
import { urlForImage } from '../../sanity/lib/image'
import { AboutUsPageContentData } from '../../types'

interface IProps {
    className: string,
    aboutPageContentData: AboutUsPageContentData
}


export default function MainAboutUsPageContent({ className,aboutPageContentData }:IProps){

    return(
        <div className={className}>
            <Suspense fallback={<CustomSkeleton className="w-full lg:w-1/2 h-[20em] lg:h-4/5" variant="rectangular" />}>
                <div className='md:w-[40em] md:mx-auto lg:w-1/2 '>
                    <Image
                        src={urlForImage(aboutPageContentData?.aboutUsRepImg).url()} 
                        alt={aboutPageContentData?.aboutUsRepImg.alt} 
                        quality={100}
                        width={750}
                        height={750}
                        className=''
                    />
                </div>
            </Suspense>
            <Suspense fallback={<CustomSkeleton className="w-full lg-1/2 h-[30em] lg:h-[90%]" variant="rectangular" />}>
                <div className="aboutMainContentTextContainer lg:w-1/2">
                    <PortableText value={aboutPageContentData?.mainContent} />
                </div>
            </Suspense>
        </div>
    )
}