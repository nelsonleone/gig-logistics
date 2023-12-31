"use client"

import { useEffect, useState } from "react"
import IndividualSignupSection from "./IndividualSignUpSection"
import CorporateSignUpSection from "./CorporateSignupSection"
import CustomRadioGroup from "../assets/inputs/CustomRadioGroup"
import { SignUpRadioInputValue } from "@/enums"
import { roboto_slab } from "@/app/fonts"

export default function SignUpMainCP(){
    
    const [activeTab,setActiveTab] = useState(0)
    const [radioValue,setRadioValue] = useState<SignUpRadioInputValue>(SignUpRadioInputValue.Individual)
    const id = "signup-account-type-radio-input"

    useEffect(() => {
        radioValue === SignUpRadioInputValue.Individual ? setActiveTab(0) : setActiveTab(1)
    },[radioValue])

    return(
        <main className="my-12 pt-10 pb-8 min-h-[20em] text-[#374151] bg-white rounded-lg w-11/12 mx-auto md:w-[28em] shadow-lg drop-shadow-md">
            <div>
               <h1 id={id} className={`${roboto_slab.className} text-3xl font-bold text-center my-4 text-[#374151]`}>Sign Up With Us As</h1>
                <CustomRadioGroup 
                    radioGroupData={[{ value: SignUpRadioInputValue.Individual, label: "Individual" }, { value: SignUpRadioInputValue.Corporate, label: "Corporate"}]}  
                    name="signup-account-type" 
                    value={radioValue} 
                    setValue={setRadioValue}
                    id={id}
                />
            </div>
            {
                activeTab === 0 ?
                <IndividualSignupSection />
                :
                <CorporateSignUpSection />
            }
        </main>
    )
}