"use client"

import { roboto_slab } from "@/app/fonts";
import WalletCard from "./WalletCard";
import CustomDuoDatePickerInput from "../CustomDuoDatePicker";
import { useForm } from "react-hook-form";

function MainWalletComponent() {

    const { control } = useForm<{ startDate: Date | null , endDate: Date | null }>()

    return(
        <div className="my-10">
            <h2 className={`${roboto_slab.className} text-2xl lg:text-3xl mt-4 font-bold mb-8 text-[#374151] text-center`}>Fund your wallet to enjoy seamless transactions from start to finish</h2>
            <WalletCard />
            <CustomDuoDatePickerInput control={control} name={["startDate","endDate"]} />
        </div>
    )
}

export default MainWalletComponent;