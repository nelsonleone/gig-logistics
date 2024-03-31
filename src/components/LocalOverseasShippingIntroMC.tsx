"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { LocalOverseasShippingIntroData, LocalOverseasShippingIntroPageDestinationOrigin } from '../../types';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import CustomQuotePageSelect from './assets/inputs/CustomQuotePageSelect';
import { BiSolidMessageAltError } from 'react-icons/bi';
import { useRouter } from "next/navigation";
import Link from "next/link";

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
            <Link className="underline font-medium text-cyan-600" href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : "" }>
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
            <Link className="underline font-medium text-cyan-600" href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : "" }>
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
    const origin = useWatch({ control, name: 'origin.label' })
    const destination = useWatch({ control, name: 'destination.label' })
    const router = useRouter()

    const handleStartOverseasShopping : SubmitHandler<LocalOverseasShippingIntroPageDestinationOrigin> = (data) => {
        router.push("/app-panel/overseas-shipping/shipping-details/shipment-address")
    }

    return(
        data &&
        <div role="presentation" className="text-[#374151]">
            <section className="flex flex-col justify-between md:flex-row  px-6 xl:px-10">
                <div className="md:w-1/2">
                    <PortableText value={data.introText} components={serializer1} />
                </div>
                <div>
                    <Image src={data.introTextIllustrationImage} width={600} height={600} alt={data.introTextIllustrationImageAlt} />
                </div>
            </section>

            <form onSubmit={handleSubmit(handleStartOverseasShopping)} className="mt-16 bg-white px-6 xl:px-10 py-10">
                <h2 className="text-center mb-12 font-bold text-2xl">Overseas Shipping {destination && origin && `( from ${origin} to ${destination} )`} - what you need to know</h2>
                <div className="md:flex gap-8">
                    <div className="w-full mb-6 lg:w-80">
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

                    <div className="w-full mb-6 lg:w-80">
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

                <button className="block rounded-sm text-white bg-black font-medium p-4 text-center mx-auto w-full md:w-[20em] my-16 hover:opacity-90 focus:bg-transparent focus:text-black focus:outline focus:outline-2 focus:outline-black">Proceed</button>
            </form>
        </div>
    )
}

export default LocalOverseasShippingIntroMC;