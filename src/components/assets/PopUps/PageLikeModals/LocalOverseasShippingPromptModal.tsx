"use client"

import { useState } from 'react'
import getLocalOverseasShippingPromptMessageData from "@/helperFns/getLocalOverseasShippingPromptMessageData";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../../../sanity/lib/image";
import Image from "next/image";

const serializer = {

}

async function LocalOverseasShippingPromptModal() {

    const data = await getLocalOverseasShippingPromptMessageData()
    const [selectedOriginAndDestination,setSelectedOriginAndDestination] = useState()

    return(
        data ?
        <div role="presentation">
            <section>
                <PortableText value={data.introText} components={serializer} />
                <div>
                    <Image src={urlForImage(data.introTextIllustrationImage.asset).url()} width={500} height={500} alt={data.introTextIllustrationImage.alt} />
                </div>
            </section>

            <section>
                <h4>Overseas Shipping - what you need to know</h4>
                <div>
                    <
                </div>
            </section>
        </div>
        :
        <p>Error Fetching Prompt Content, Please Try Again</p>
    )
}

export default LocalOverseasShippingPromptModal;