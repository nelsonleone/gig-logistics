import { PortableText } from "@portabletext/react";
import { OverseasShippingTradeOptDataType } from "../../types";
import Link from "next/link";
import { Suspense } from 'react'
import CustomSkeleton from "./assets/Loaders";

interface IProps {
    overseasShippingTradeOptData: OverseasShippingTradeOptDataType[] | null
}

const serializer = {
    block: {
        h3({ children }:any){
            return <h3 className="text-xl font-bold my-2">{children}</h3>
        },
        normal({ children }:any){
            return <p className="mb-2 last-of-type:mb-0 md:mb-4">{children}</p>
        },
    },
    list: {
        bullet: ({ children }:any) => <ul className="ms-7">{children}</ul>
    },
    listItem: {
        bullet: ({ children }:any) => <li className="list-disc md:my-2">{children}</li>,
    },
    marks: {    
        link: ({ value, children }:any) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined

          return (
            <Link className="underline font-medium" href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : "" }>
              {children}
            </Link>
          )
        },
    },
}

function OverseasShippingTradeOpt({ overseasShippingTradeOptData }:IProps) {
    return (
        <section className="flex flex-col gap-4 mb-8 md:flex-row md:flex-wrap md:justify-between">
            {
                overseasShippingTradeOptData ? overseasShippingTradeOptData?.map((val,index) => {
                    return(
                        <Suspense key={`ostod-${index}`} fallback={<CustomSkeleton variant="rectangular" className="w-full h-80 md:w-[45%] lg:h-[30em]" />}>
                           <div key={`ostod-${index}`} className="mb-4 md:basis-[45%]">
                                <PortableText value={val.tradeOptPreviewGuideLine} components={serializer} />
                            </div>
                        </Suspense>
                    )
                })
                :
                <CustomSkeleton variant="rectangular" className="w-full h-80 md:w-[45%] lg:h-[30em]" />
            }
        </section>
    )
}

export default OverseasShippingTradeOpt;