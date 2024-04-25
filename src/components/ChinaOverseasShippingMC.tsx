import { PortableText } from "@portabletext/react";
import Image from "next/image"
import Link from "next/link"
import { ChinaOverseasShippingData } from "../../types";
import { roboto_slab } from "@/app/fonts";

const serializer1 = {
    block: {
        h1({ children }:any){
            return <h1 className={`${roboto_slab.className} text-4xl text-base-color2 font-bold my-12`}>{children}</h1>
        },
        h3({ children }:any){
            return <h3 className="text-xl font-bold my-2">{children}</h3>
        },
        normal({ children }:any){
            return <p className="mb-4">{children}</p>
        }
    },
    listItem: {
        bullet: ({ children }:any) => <li className="list-disc md:my-2 mx-6">{children}</li>,
    },
    marks: {    
        link: ({ value, children }:any) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined

          return (
            <Link className="underline font-medium text-accent-color2" href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : "" }>
              {children}
            </Link>
          )
        },
        strong: ({ children }: any) => {
            return <span className="text-accent-color">{children}</span>
        }
    },
}

const serializer2 = {
    block: {
        normal({ children }:any){
            return <p className="my-6 leading-8">{children}</p>
        },
        h3({ children }:any){
            return <h3 className="text-xl font-bold mt-9 mb-2">{children}</h3>
        },
    },
    marks: {    
        link: ({ value, children }:any) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined

          return (
            <Link className="underline font-medium text-accent-color2" href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : "" }>
              {children}
            </Link>
          )
        },
    },
}

export default async function({ data }: { data: ChinaOverseasShippingData | null }){
    return(
        data &&
        <section className="text-primary">
            <div className="pt-8 flex flex-col justify-between md:flex-row">
                <div>
                    <Image src={data?.repImage} className="rounded-sm" width={600} height={600} alt={data?.repImageAlt} />
                </div>
                <div className="md:w-1/2">
                    <PortableText value={data?.introTextContent} components={serializer1} />
                </div>
            </div>

            <div className="my-7 lg:px-8">
                <PortableText value={data?.fullGuidelineDetails} components={serializer2} />
            </div>
        </section>
    )
}