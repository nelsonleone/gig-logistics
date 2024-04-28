'use client'

import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "../../sanity-studio/lib/image";
import { PortableTextBlock } from "@portabletext/types";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";


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
          <Link href={value.href} rel={rel} className="text-accent-color3 underline">
            {children}
          </Link>
        )
      },
    },
    listItem: {
        bullet: ({ children }:any) => <li className="list-disc my-2 mx-3">{children}</li>,
    }
}



export default function FaqAccordion(props:IProps){


    return(
        props.val ?
        <Accordion>
            {
                props.val.faqSection.faqsArray.map(faq => (
                    <AccordionPanel key={faq._key}>
                        <AccordionTitle className="text-lg">{faq.question}</AccordionTitle>
                        <div className="text-sm">
                            <PortableText value={faq.answer} components={portableTextComponent} />
                        </div>
                    </AccordionPanel>
                ))
            }
        </Accordion>
        :
        null
    )
}