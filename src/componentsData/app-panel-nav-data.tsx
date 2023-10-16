import { TbTruckDelivery } from 'react-icons/tb'
import { GiCommercialAirplane, GiStabbedNote } from 'react-icons/gi'
import { FaWallet, FaShoppingCart, FaTruck } from 'react-icons/fa'
import { RiWalletFill } from 'react-icons/ri'

interface IAppPanelNavData {
    link: string,
    text: string,
    icon: ({ className, ariaLabel }: { className:string, ariaLabel: string }) =>  JSX.Element
}


const appPanelNavData : IAppPanelNavData[] = [
    {
        link: "ship-now",
        text: "Ship Now",
        icon({ className, ariaLabel }){
            return <FaTruck aria-label={ariaLabel} className={className} />
        }
    },
    {
        link: "get-a-quote",
        text: "Get A Quick Quote",
        icon({ className, ariaLabel }){
            return <GiStabbedNote aria-label={ariaLabel} className={className} />
        }
    },
    {
        link: "dropoff",
        text: "Xpress Drop-Off",
        icon({ className, ariaLabel }){
            return <TbTruckDelivery aria-label={ariaLabel} className={className} />
        }
    },
    {
        link: "overseas-shipping",
        text: "Overseas Shipping",
        icon({ className, ariaLabel }){
            return <GiCommercialAirplane aria-label={ariaLabel} className={className} />
        }
    },
    {
        link: "wallet",
        text: "Transactions",
        icon({ className, ariaLabel }){
            return <FaWallet aria-label={ariaLabel} className={className} />
        }
    },
    {
        link: "cod-wallet",
        text: "Cod Wallet",
        icon({ className, ariaLabel }){
            return <RiWalletFill aria-label={ariaLabel} className={className} />
        }
    },
    {
        link: "personal-shopping",
        text: "Personal Shopping",
        icon({ className, ariaLabel }){
            return <FaShoppingCart aria-label={ariaLabel} className={className} />
        }
    }
]


export default appPanelNavData;