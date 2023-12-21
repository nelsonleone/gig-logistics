import { roboto_slab } from "@/app/fonts"

interface IProps {
    introHeading: string,
    introText: string
}

export default function AppPanelPagesIntro({ introHeading, introText }:IProps){
    return(
        <div className="mt-20">
            <h1 className={`${roboto_slab.className} font-bold mb-4 text-3xl text-center`}>{introHeading}</h1>
            <p className="text-center lg:w-4/5 lg:mx-auto my-3">{introText}</p>
        </div>
    )
}