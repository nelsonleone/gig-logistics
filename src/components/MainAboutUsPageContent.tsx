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
    const customPTComponent = {
        block: {
            p: ({ children }:any) => (
                <p className="underline mt-6 block">{children}......</p>
            )
        }
    }

    return(
        <div className={className}>
            <Suspense fallback={<CustomSkeleton className="" variant="rectangular" />}>
                <div className='flex items-center justify-center'>
                    <Image
                        src={urlForImage(aboutPageContentData?.aboutUsRepImg).url()} 
                        alt={aboutPageContentData?.aboutUsRepImg.alt} 
                        quality={100}
                        width={650}
                        height={650}
                    />
                </div>
            </Suspense>
            <Suspense fallback={<CustomSkeleton className="" variant="rectangular" />}>
                <div>
                    <PortableText value={aboutPageContentData?.mainContent} components={customPTComponent} />
                </div>
            </Suspense>
        </div>
    )
}