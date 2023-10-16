import { roboto_slab } from "@/app/fonts";
import { addedWalletServicesData } from "@/componentsData/wallet-services";

export default function AddedServices(){
    return(
        <section className="mt-5 lg:mt-20">
            <h2 className={`${roboto_slab.className} text-4xl font-semibold capitalize text-center mb-12 lg:text-left`}>Added Services</h2>
            <div className="lg:flex justify-between items-center">
                <div className="lg:basis-[50%]">
                    {
                        addedWalletServicesData.map(val => {
                            const Icon = val?.icon;
                            return(
                                <div key={val.title} className="mb-16 flex gap-4 justify-between md:justify-center lg:justify-between">
                                    {
                                        Icon &&
                                        <Icon />
                                    }
                                    <div className="w-[83%] lg:w-[78%]">
                                        <h3 className="text-xl font-semibold capitalize mb-2">{val.title}</h3>
                                        <p>{val.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bg-[url('/images/coin-wallet-illustration.svg')] bg-no-repeat bg-contain bg-center w-full h-[20em] md:h-[25em] lg:basis-[45%]"></div>
            </div>
        </section>
    )
}