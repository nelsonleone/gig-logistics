import { MdCheck } from "react-icons/md"

interface IProgressProps {
    currentStep: number,
    className: string,
    stepLabel: [string,string,string]
}

export default function ShippingDetailsProgressLoader({ currentStep, className, stepLabel }: IProgressProps){

    return(
        <div role="progressbar" className={className}>
            <div className="flex">
                <div aria-describedby="step1" className="sdpl_step_indicator_container">
                    <div className={`sdpl_step_indicator  ${currentStep !== 0 ? "bg-white border border-gray-300 shadow-sm" : ""}`}>
                        <span className={`${currentStep === 0 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>{currentStep > 1 ? <MdCheck /> : "1" }</span>
                    </div>
                    <p id="step1" className={`sdpl_label ${currentStep === 0 ? "opacity-100" : "opacity-30"}`}>{stepLabel[0]}</p>
                </div>

                <div aria-describedby="step2" className={`sdpl_step_indicator_container  ${currentStep !== 2 ? "bg-gray-300" : ""}`}>
                    <div className={`sdpl_step_indicator  ${currentStep !== 1 ? "bg-white border border-gray-300 shadow-sm" : ""}`}>
                        <span className={`${currentStep === 1 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>{currentStep > 2 ? <MdCheck /> : "2" }</span>
                    </div>
                    <p id="step2" className={`sdpl_label ${currentStep === 1 ? "opacity-100" : "opacity-30"} text-center `}>{stepLabel[1]}</p>
                </div>

                <div aria-describedby="step3" className={`sdpl_step_indicator_container w-[23%] ${currentStep !== 2 ? "bg-gray-300" : ""}`}>
                    <div className={`sdpl_step_indicator left-auto right-0 mx-0 ${currentStep !== 2 ? "bg-white border border-gray-300 shadow-sm" : ""}`}>
                        <span className={`${currentStep === 2 ? "text-[#FFFFFF]" : "text-gray-500 opacity-60"} font-medium text-xs`}>3</span>
                    </div>
                    <p id="step3" className={`sdpl_label ${currentStep === 2 ? "opacity-100" : "opacity-30"} text-right`}>{stepLabel[2]}</p>
                </div>
            </div>

        </div>
    )
}