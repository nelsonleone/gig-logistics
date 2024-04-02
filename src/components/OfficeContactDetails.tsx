"use client";

import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { ContactCenter } from '../../types';

interface IProps {
    val: ContactCenter
}

export default function OfficeContactDetails({ val }:IProps){
    return(
        <motion.div 
            key={val.id} 
            initial={{ opacity: 0, x: -300, y: 200 }}
            animate={{ opacity: 1, x: 0, y: 0, transition: { duration: .5, ease: "linear" } }}
            viewport={{ once: true }}
            className="mb-8 text-primary"
            >
            <h3 className="font-bold text-[1rem] my-2" id={val.id}>{val.heading}</h3>
            {
                val.contactDetails.email ?
                <div className="flex justify-start gap-3 items-center my-2">
                    <MdEmail className="text-[1.4rem]" aria-hidden="true" />
                    <Link href={`https://mail.google.com/mail/?view=cm&to=${val.contactDetails.email}`} aria-labelledby={val.id}>{val.contactDetails.email}</Link>
                </div>
                :
                null
            }
            {
                val.contactDetails.phone ?
                <div className="flex justify-start gap-3 items-center my-2">
                    <BsFillTelephoneFill aria-hidden="true" />
                    <Link href={`tel:${val.contactDetails.phone}`} aria-labelledby={val.id}>{val.contactDetails.phone}</Link>
                </div>
                :
                null
            }
            {
                val.contactDetails.whatsapp ?
                <div className="flex justify-start gap-3 items-center my-2">
                    <BsWhatsapp aria-hidden="true" />
                    <Link href={`tel:${val.contactDetails.whatsapp}`} aria-labelledby={val.id}>{val.contactDetails.whatsapp}</Link>
                    {
                        val.location === "China" &&
                        <p className="justify-self-start">(Whatsapp only)</p>
                    }
                </div>
                :
                null
            }
        </motion.div>
    )
}