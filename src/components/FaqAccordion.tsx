'use client'

import { Accordion } from "@mantine/core";
import { FaqData } from "../../types";
import { PortableText } from '@portabletext/react'
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "../../sanity/lib/image";
import { PortableTextBlock } from "@portabletext/types";


interface IProps {
    val: {
        faqSection: {
            faqsArray: {
                question: string,
                answer: PortableTextBlock[],
                _key: string
            }[],
        }
    }
}


const portableTextComponent : PortableTextComponents = {
    types: {
      image: ({value}) => <img src={urlForImage(value).url()} />,
    },
  
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        )
      },
    },
}



export default function FaqAccordion(props:IProps){


    return(
        <Accordion variant="contained" radius="md">
            {
                props.val.faqSection.faqsArray.map(faq => (
                    <Accordion.Item key={faq._key} value={faq.question}>
                        <Accordion.Control>{faq.question}</Accordion.Control>
                        <Accordion.Panel>
                            <PortableText value={faq.answer} components={portableTextComponent} />
                        </Accordion.Panel>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}