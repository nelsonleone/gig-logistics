import CustomSkeleton from "@/components/assets/Loaders";
import getTermsAndConditionsData from "@/helperFns/getTermsAndConditionsData"
import { PortableText } from "@portabletext/react";
import { roboto_slab } from "../fonts";
import Link from "next/link";

const serializer = {
    block: {
        h5({ children }:any){
            return <h2 className="text-lg font-semibold my-2 mt-9">{children}</h2>
        },
        normal({ children }:any){
            return <p className="mt-4 termsAndConditionsContentPTag-first">{children}</p>
        }
    },
    listItem: {
        number: ({ children }:any) => <li className="list-decimal md:my-2 mx-6">{children}</li>,
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


export default async function TermsAndConditionsPage(){

    const termsAndConditionsData = await getTermsAndConditionsData()

    return(
        <main className="page px-0 text-primary">
            {
                termsAndConditionsData ?
                <>
                    <div className="bg-[url('/images/offices_bg.svg')] py-16 w-full">
                      <h1 className={`${roboto_slab.className} text-center text-4xl font-bold my-12`}>Terms And Conditions</h1>
                    </div>
                    <article className="my-8 bg-base-color1 rounded-lg px-4 lg:px-6 py-8 md:w-11/12 md:mx-auto">
                        <PortableText value={termsAndConditionsData?.detailedTermsAndConditions} components={serializer} />
                    </article>
                </>
                :
                <CustomSkeleton variant="rectangular" className="w-full h-screen rounded-lg" />
            }
        </main>
    )
}