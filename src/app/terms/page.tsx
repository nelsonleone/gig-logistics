import CustomSkeleton from "@/components/assets/Loaders";
import getTermsAndConditionsData from "@/helperFns/getTermsAndConditionsData"
import { PortableText } from "@portabletext/react";
import { roboto_slab } from "../fonts";
import Link from "next/link";

const serializer = {
    block: {
        h5({ children }:any){
            return <h2 className="text-lg font-semibold my-2 mt-8">{children}</h2>
        },
        normal({ children }:any){
            return <p className="mt-4">{children}</p>
        }
    },
    listItem: {
        number: ({ children }:any) => <li className="md:my-2 mx-6">{children}</li>,
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
                    <div className="bg-[url('/images/offices_bg.svg')] py-20 w-full">
                      <h1 className={`${roboto_slab.className} text-4xl font-bold my-12`}>Terms And Conditions</h1>
                    </div>
                    <article className="bg-base-color1">
                        <PortableText value={termsAndConditionsData?.detailedTermsAndConditions} components={serializer} />
                    </article>
                </>
                :
                <CustomSkeleton variant="rectangular" className="w-full h-screen rounded-lg" />
            }
        </main>
    )
}