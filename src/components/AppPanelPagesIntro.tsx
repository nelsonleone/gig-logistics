import { roboto_slab } from "@/app/fonts"

interface IProps {
    introHeading: string,
    introText: string
}

export default function AppPanelPagesIntro({ introHeading, introText }:IProps){
    return(
        <div className="mt-20">
            <h1 className={`${roboto_slab.className} font-bold mb-2 text-3xl text-center`}>{introHeading}</h1>
            <p className="text-center">{introText}</p>
        </div>
    )
}