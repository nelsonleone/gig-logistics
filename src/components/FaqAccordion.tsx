'use client'

import { PortableText } from '@portabletext/react'
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "../../sanity-studio/lib/image";
import { PortableTextBlock } from "@portabletext/types";
import { inter } from "@/app/fonts";
import styles from '../LibCSSModules/faq-accordion-styling.module.css'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { GoTriangleDown } from 'react-icons/go';


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
        <div>
            {
                props.val.faqSection.faqsArray.map((faq,index) => {
                    return (
                        <Accordion key={index} className={inter.className}>
                            <AccordionSummary
                                expandIcon={<GoTriangleDown />}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-panel-${index}`}
                                className="text-lg font-medium"
                                >
                                {faq.question}
                            </AccordionSummary>
                            <AccordionDetails>
                                <PortableText value={faq.answer} components={portableTextComponent} />
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
        :
        null
    )
}