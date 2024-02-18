"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { LocalOverseasShippingIntroData, LocalOverseasShippingIntroPageDestinationOrigin } from '../../types';
import { urlForImage } from '../../sanity-studio/lib/image';
import { useForm } from 'react-hook-form';
import CustomQuotePageSelect from './assets/inputs/CustomQuotePageSelect';
import { BiSolidMessageAltError } from 'react-icons/bi';
import Link from "next/link";

const serializer1 = {
    block: {
        h1({ children }:any){
            return <h3 className="text-3xl font-bold mb-6">{children}</h3>
        },
        h3({ children }:any){
            return <h3 className="text-xl font-bold my-2">{children}</h3>
        },
        normal({ children }:any){
            return <p className="mb-4">{children}</p>
        },
    },
    listI
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

const serializer2 = {
    block: {
        normal({ children }:any){
            return <p className="my-6">{children}</p>
        },
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

const destinationOriginData = {
    origin: [
        { label: "UK", value: "uk"} , { label: "USA", value: "usa"} , { label: "CHINA", value: "china" }
    ],

    destination: [
        { label: "NIGERIA", value: "nigeria"}, { label: "GHANA", value: "ghana" }
    ]
}

function LocalOverseasShippingIntroMC({ data }: { data: LocalOverseasShippingIntroData | null }) {

    const { control, handleSubmit, formState: { errors } } = useForm<LocalOverseasShippingIntroPageDestinationOrigin>() 

    return(
        data ?
        <div role="presentation" className="text-[#374151]">
            <section className="flex flex-col justify-between lg:flex-row  px-6 xl:px-10">
                <div>
                    <PortableText value={data.introText} components={serializer1} />
                </div>
                <div>
                    <Image src={data.introTextIllustrationImage} width={600} height={600} alt={data.introTextIllustrationImageAlt} />
                </div>
            </section>

            <section className="mt-16 bg-white px-6 xl:px-10 py-8">
                <h2 className="text-center mb-10 font-bold text-2xl">Overseas Shipping - what you need to know</h2>
                <div className="md:flex gap-8">
                    <div className="w-full mb-6">
                        <CustomQuotePageSelect 
                            name="origin" 
                            id="overseas-shipping-intro-origin" 
                            control={control}
                            selectStyles={{ height: "3.2em",}}
                            placeholder="Select origin"
                            hasError={errors?.origin?.message ? true : false}
                            data={destinationOriginData.origin}
                            required="Please select an origin for your shipping info"
                            optionStyles={{
                                color: "#374151"
                            }}
                        />
                        {
                            errors.origin?.message &&
                            <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.origin.message}</p>
                        }
                    </div>

                    <div className="w-full mb-6">
                        <CustomQuotePageSelect 
                            name="destination" 
                            id="overseas-shipping-intro-destination" 
                            control={control}
                            selectStyles={{ height: "3.2em",}}
                            placeholder="Select destination"
                            hasError={errors?.destination?.message ? true : false}
                            data={destinationOriginData.destination}
                            required="Please select a destination for your shipping info"
                            optionStyles={{
                                color: "#374151"
                            }}
                        />
                        {
                            errors.destination?.message &&
                            <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.destination.message}</p>
                        }
                    </div>
                </div>

                <div>
                    <PortableText value={data.whatYouNeedToKnow} components={serializer2} />
                </div>

                <button className="block text-white bg-black rounded-sm font-medium text-sm p-3 text-center mx-auto w-20 hover:opacity-90 focus:bg-transparent focus:text-black focus:outline focus:outline-2 focus:outline-black">Proceed</button>
            </section>
        </div>
        :
        <p>Error Fetching Prompt Content, Please Try Again</p>
    )
}

export default LocalOverseasShippingIntroMC;