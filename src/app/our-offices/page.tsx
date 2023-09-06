import Link from "next/link";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import contactCenterArray from "../../componentsData/contactDetailsData";

export default function OurOffices(){
    return(
        <main className="page bg-[url('/images/offices_bg.svg')]">
            <h1 className="text-3xl text-[#374151] text-center font-bold font-roboto-slab my-2">Our Offices</h1>
            <section className="mt-10 px-4">
                <h2 className="text-xl text-[#374151] font-semibold underline">Contact Centers</h2>
                <div>
                    {
                        contactCenterArray.map(val => {
                            return(
                                <div key={val.id} className="mb-8 text-[#374151]">
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
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section>
                <h2>Office Locations</h2>
            </section>
        </main>
    )
}