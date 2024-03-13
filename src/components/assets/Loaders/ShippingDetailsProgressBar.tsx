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
        "/app-panel/overseas-shipping/shipping-details/item-info",
        "/app-panel/overseas-shipping/shipping-details/items"
    ]

    const currentStep = stepArray.findIndex(path => path === pathName)

    return(
        <div role="progressbar" className={className}>
            <div className="flex">
                <div aria-describedby="step1" className="sdpl_step_indicator_container">
                    <div className={`sdpl_step_indicator`}>
                        <span className={`font-medium ${currentStep === 0 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>{currentStep > 0 ? <FiCheck className="text-white relative z-10 text-[1.1rem]" /> : "1" }</span>
                    </div>
                    <p id="step1" className={`sdpl_label md:text-center`}>{stepLabel[0]}</p>
                </div>

                <div aria-describedby="step2" className={`sdpl_step_indicator_container  ${currentStep < 1 ? "bg-gray-300" : ""}`}>
                    <div className={`sdpl_step_indicator  ${currentStep < 1 ? "bg-white border border-gray-300 shadow-sm" : "bg-black text-white"}`}>
                        <span className={`font-medium ${currentStep === 1 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>{currentStep > 1 ? <FiCheck className="text-white relative z-10 text-[1.1rem]" /> : "2" }</span>
                    </div>
                    <p id="step2" className={`sdpl_label ${currentStep >= 1 ? "opacity-100" : "opacity-30"} text-center `}>{stepLabel[1]}</p>
                </div>

                <div aria-describedby="step3" className={`sdpl_step_indicator_container  ${currentStep < 2 ? "bg-gray-300" : ""}`}>
                    <div className={`sdpl_step_indicator  ${currentStep < 2 ? "bg-white border border-gray-300 shadow-sm" : "bg-black text-white"}`}>
                        <span className={`font-medium ${currentStep === 2 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>3</span>
                    </div>
                    <p id="step3" className={`sdpl_label ${currentStep === 2 ? "opacity-100" : "opacity-30"} text-center `}>{stepLabel[2]}</p>
                </div>
            </div>

        </div>
    )
}