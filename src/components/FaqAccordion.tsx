'use client'

import { Accordion, MantineProvider } from "@mantine/core";
import { PortableText } from '@portabletext/react'
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "../../sanity-studio/lib/image";
import { PortableTextBlock } from "@portabletext/types";
import { inter } from "@/app/fonts";
import styles from '../LibCSSModules/faq-accordion-styling.module.css'


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
        props.val ?
        <MantineProvider>
            <Accordion variant="contained" radius="md" transitionDuration={400}>
                {
                    props.val.faqSection.faqsArray.map(faq => (
                        <Accordion.Item key={faq._key} value={faq.question}>
                            <Accordion.Panel className={`${inter.className} text-[.9rem]`}>
                                <PortableText value={faq.answer} components={portableTextComponent} />
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </MantineProvider>
        :
        null
    )
}