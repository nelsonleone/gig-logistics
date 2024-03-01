"use client"

import { usePathname } from "next/navigation"
import { FiCheck } from "react-icons/fi"

interface IProgressProps {
    className: string,
    stepLabel: [string,string,string]
}

export default function ShippingDetailsProgressLoader({ className, stepLabel }: IProgressProps){

    const pathName = usePathname()
    const stepArray = [
        "/app-panel/overseas-shipping/shipping-details/shipment-address",
        "/app-panel/overseas-shipping/shipping-details/item-info"
    ]

    const currentStep = stepArray.findIndex(path => path === pathName)

    return(
        <div role="progressbar" className={className}>
            <div className="flex">
                <div aria-describedby="step1" className="sdpl_step_indicator_container">
                    <div className={`sdpl_step_indicator`}>
                        <span className={`${currentStep === 0 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>{currentStep > 0 ? <FiCheck className="text-white relative z-10 text-[1.12rem]" /> : "1" }</span>
                    </div>
                    <p id="step1" className={`sdpl_label ${currentStep === 0 ? "opacity-100" : "opacity-30"} md:text-center`}>{stepLabel[0]}</p>
                </div>

                <div aria-describedby="step2" className={`sdpl_step_indicator_container  ${currentStep !== 2 ? "bg-gray-300" : ""}`}>
                    <div className={`sdpl_step_indicator  ${currentStep < 1 ? "bg-white border border-gray-300 shadow-sm" : "bg-black text-white"}`}>
                        <span className={`${currentStep === 1 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>{currentStep > 1 ? <FiCheck className="text-white relative z-10 text-[1.2rem]" /> : "2" }</span>
                    </div>
                    <p id="step2" className={`sdpl_label ${currentStep === 1 ? "opacity-100" : "opacity-30"} text-center `}>{stepLabel[1]}</p>
                </div>

                <div aria-describedby="step3" className={`sdpl_step_indicator_container w-[23%] md:w-[35%] ${currentStep !== 2 ? "bg-gray-300" : ""}`}>
                    <div className={`sdpl_step_indicator left-auto right-0 mx-0 ${currentStep !== 2 ? "bg-white border border-gray-300 shadow-sm" : "bg-black text-white relative z-10"}`}>
                        <span className={`${currentStep === 2 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>3</span>
                    </div>
                    <p id="step3" className={`sdpl_label ${currentStep === 2 ? "opacity-100" : "opacity-30"} text-right md:text-center`}>{stepLabel[2]}</p>
                </div>
            </div>

        </div>
    )
}