import { TbCurrencyNaira } from "react-icons/tb";

export default function XpressDropOffEstimatedCostSection(){
    return(
        <div className="shadow-lg bg-white drop-shadow-md rounded-md mt-12 w-full py-6 px-3 md:px-10">
            <h4 className="font-medium md:text-sm mb-2">Estimated Cost</h4>
            <strong className="font-bold text-3xl flex">
             <TbCurrencyNaira className="text-4xl" />
             <span>8,0032737</span>
            </strong>
        </div>
    )
}