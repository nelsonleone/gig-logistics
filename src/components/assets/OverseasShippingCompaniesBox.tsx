import Image from "next/image";
import Link from "next/link";

interface IProps {
    imgSrc?: string,
    imgAlt?: string,
    linkHref: string,
    nameText?: string
}

function OverseasShippingCompaniesBox({ imgSrc, nameText, imgAlt, linkHref }:IProps) {
    return (
        imgSrc ?
        <Link href={linkHref} className="w-full p-3 rounded-md flex overflow-hidden justify-center items-center border border-gray-100 my-4 shadow-md h-32 lg:h-28">
            <div className="flex justify-center items-center">
               <Image src={imgSrc} alt={imgAlt || "company logo"} width={150} height={150} quality={95} />
            </div>
        </Link>
       :
       <Link href={linkHref} className="w-full p-3 rounded-md flex overflow-hidden justify-center items-center border border-gray-100 my-4 shadow-md h-20">
            <div className="flex justify-center items-center">
                <p className="text-center capitalize">{nameText}</p>
            </div>
       </Link>
    )
}

export default OverseasShippingCompaniesBox;