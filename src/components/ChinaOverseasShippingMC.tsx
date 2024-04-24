import { PortableText } from "@portabletext/react";
import Image from "next/image"
import Link from "next/link"
import { ChinaOverseasShippingData } from "../../types";

const serializer1 = {
    block: {
        h1({ children }:any){
            return <h3 className="text-3xl font-bold my-12">{children}</h3>
        },
        h3({ children }:any){
            return <h3 className="text-xl font-bold my-2">{children}</h3>
        },
        normal({ children }:any){
            return <p className="mb-4">{children}</p>
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

const serializer2 = {
    block: {
        normal({ children }:any){
            return <p className="my-6 leading-8">{children}</p>
        },
    },
    list: {
        bullet: ({children}:any) => <ul className="my-8">{children}</ul>,
    },
    listItem: {
        bullet: ({children}:any) => <li className="ms-4 my-1">{children}</li>,
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
        <section>
            <div className="flex flex-col justify-between md:flex-row  px-6 xl:px-10">
                <div className="md:w-1/2">
                    <PortableText value={data?.introTextContent} components={serializer1} />
                </div>
                <div>
                    <Image src={data?.repImage} width={600} height={600} alt={data?.repImageAlt} />
                </div>
            </div>
        </section>
    )
}