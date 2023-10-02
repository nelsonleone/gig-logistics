import { addedWalletServicesData } from "@/componentsData/wallet-services";

export default function AddedServices(){
    return(
        <section>
            <h2>Added Services</h2>
            <div>
                <div>
                    {
                        addedWalletServicesData.map(val => {
                            const Icon = val.icon;
                            return(
                                <div>
                                    <Icon />
                                    <div>
                                        <h3>{val.title}</h3>
                                        <p>{val.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div></div>
            </div>
        </section>
    )
}