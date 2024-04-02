import { roboto_slab } from "@/app/fonts"
import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer"
import { getPersonalShoppingInfoData } from "@/helperFns/getPersonalShoppingInfoData"
import Link from "next/link"
import { FaStarHalf } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"

export default async function PersonalShoppingInfo(){

    const personalShoppingInfoSanityData = await getPersonalShoppingInfoData()
    const backgroundImageUrl = `url(${personalShoppingInfoSanityData.introBgImage})`

    return(
        <section className="page px-0">
            <div className="h-[87vh] w-full bg-cover bg-center bg-no-repeat relative" style={{backgroundImage:backgroundImageUrl}}>
                <div className="bg-base-color2 rounded-sm py-4 px-6 xl:px-10 absolute bottom-0 left-0 w-4/5 flex flex-col justify-center text-base-color1 md:w-2/5 md:py-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-8">{personalShoppingInfoSanityData?.heading}</h1>
                    <Link href="/app-panel/personal-shopping/item_details" className="inline-flex w-40 mt-4 justify-between items-center bg-primary2 p-3 font-medium text-base-color1 hover:bg-transparent border border-primary2 hover:text-primary2 focus:bg-transparent focus:text-primary2 duration-300 ease-in-out">
                        <span>Start Shopping</span>
                        <FaArrowRightLong aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <div className="px-6 xl:px-10 text-primary"> 
                <h2 className="my-8 font-semibold text-center text-2xl md:text-4xl md:my-14">{personalShoppingInfoSanityData?.secondHeading}</h2>
                <AppPanelMCContainer className="rounded-sm lg:px-28 lg:py-10">
                    <div>
                        <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-6"><circle cx="35.8026" cy="35.6295" r="27.4981" fill="#FFCFD1"></circle><circle cx="35.8021" cy="35.6302" r="35.1976" fill="#FFCFD1" fillOpacity="0.6"></circle><path d="M25.2684 46.1638H27.902V32.9957C27.902 32.6465 28.0408 32.3115 28.2877 32.0646C28.5347 31.8176 28.8696 31.6789 29.2188 31.6789H45.0206V29.0453C45.0206 28.696 44.8819 28.3611 44.6349 28.1141C44.388 27.8672 44.053 27.7284 43.7038 27.7284H39.6862C39.3544 24.7735 36.8695 22.4612 33.8277 22.4612C30.7859 22.4612 28.301 24.7735 27.9692 27.7284H23.9516C23.6023 27.7284 23.2674 27.8672 23.0205 28.1141C22.7735 28.3611 22.6348 28.696 22.6348 29.0453V43.5302C22.6348 44.2287 22.9122 44.8986 23.4061 45.3925C23.9 45.8864 24.5699 46.1638 25.2684 46.1638ZM33.8277 25.0948C35.4171 25.0948 36.7484 26.2273 37.0539 27.7284H30.6015C30.907 26.2273 32.2383 25.0948 33.8277 25.0948Z" fill="#D5343A"></path><path d="M47.6528 34.3125H31.851C31.5018 34.3125 31.1668 34.4512 30.9199 34.6982C30.6729 34.9451 30.5342 35.2801 30.5342 35.6293V46.1638C30.5342 46.8623 30.8117 47.5322 31.3056 48.0261C31.7995 48.52 32.4693 48.7975 33.1678 48.7975H46.336C47.0344 48.7975 47.7043 48.52 48.1982 48.0261C48.6921 47.5322 48.9696 46.8623 48.9696 46.1638V35.6293C48.9696 35.2801 48.8309 34.9451 48.5839 34.6982C48.337 34.4512 48.002 34.3125 47.6528 34.3125ZM39.7519 43.5302C36.1214 43.5302 33.1678 40.5766 33.1678 36.9461H35.8014C35.8014 39.1241 37.5739 40.8966 39.7519 40.8966C41.9299 40.8966 43.7023 39.1241 43.7023 36.9461H46.336C46.336 40.5766 43.3823 43.5302 39.7519 43.5302Z" fill="#D5343A"></path></svg>
                        <h3 className={`${roboto_slab.className} text-3xl font-medium my-4 mb-12`}>How It Works</h3>
                    </div>

                    <div className="md:flex justify-between gap-[5%] flex-wrap">
                        {
                            personalShoppingInfoSanityData?.howItWorksSection.map((val,index) => (
                                <div key={index} className="my-4 relative p-4 md:w-[45%] lg:w-2/5">
                                    <h4 className="font-medium text-lg mb-4">{val.heading}</h4>
                                    <FaStarHalf aria-hidden="true" className="absolute left-0 bottom-1/2 top-1/2 my-auto" />
                                    <div className={`bg-slate-300 flex items-center justify-center p-4 relative rounded-xl md:py-8 md:min-h-[13em]`}>
                                        <p className="text-lg lg:text-xl">
                                            {val.text}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </AppPanelMCContainer>
            </div>
        </section>
    )
}