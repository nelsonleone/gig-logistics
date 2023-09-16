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
                <p>{children}</p>
            )
        }
    }

    return(
        <div className={className}>
            <Suspense fallback={<CustomSkeleton className="" variant="rectangular" />}>
                <div>
                    <Image
                        src={urlForImage(aboutPageContentData?.aboutUsRepImg).url()} 
                        alt={aboutPageContentData?.aboutUsRepImg.alt} 
                        width={800} 
                        height={800}
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