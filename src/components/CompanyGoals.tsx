import { companyGoalsData } from "@/componentsData";

export default function CompanyGoals(){
    return(
        <section className="mt-20 mb-16 lg:mt-[6rem]">
            <h3 className="text-center text-2xl font-bold font-roboto-slab lg:text-[2rem] lg:text-left lg:leading-10">We take the <span className="block text-red-600">burden of logistics off you.</span></h3>

            <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12 lg:mt-[6rem]">
                {
                    companyGoalsData.map((val,index) => {
                        return(
                            <div key={`${val.title}-${index}`} className="flex flex-col justify-between gap-4 mb-12">
                                <img 
                                  src={`/${val.iconImage}`} 
                                  alt="" 
                                  aria-hidden="true" 
                                  className="w-8 block"
                                />
                                <h4 className="font-bold text-[hsl(0,0%,4%)] mt-1 mb-3 text-lg">{val.title}</h4>
                                <p className="text-[hsl(0,0%,4%)] text-base leading-7">{val.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}