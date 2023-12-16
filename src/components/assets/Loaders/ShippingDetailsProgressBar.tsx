interface IProgressProps {
    currentStep: number,
    className: string
}

export default function ShippingDetailsProgressLoader({ currentStep, className }: IProgressProps){

    return(
        <div role="progressbar" className={className}>
            <div className="flex">
                <div aria-aria-describedby="step1">
                    <span>1</span>
                </div>
                <div aria-aria-describedby="step2">
                    <span>2</span>
                </div>
                <div aria-aria-describedby="step2">
                    <span>3</span>
                </div>
            </div>

            <p id="step1" className={`sdpl_label ${currentStep === 1 ? "opacity-100" : "opacity-30"}`}>Pick up location</p>
            <p id="step2" className={`sdpl_label ${currentStep === 1 ? "opacity-100" : "opacity-30"}`}>Shipment details</p>
            <p id="step3" className={`sdpl_label ${currentStep === 1 ? "opacity-100" : "opacity-30"}`}>Upload item</p>
        </div>
    )
}