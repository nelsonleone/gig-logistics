"use client"

import { roboto_slab } from "@/app/fonts";
import WalletCard from "./WalletCard";
import CustomDuoDatePickerInput from "../CustomDuoDatePicker";
import { useForm } from "react-hook-form";
import TransactionSectionTablist from "./TransactionSectionTablist";
import TransactionSectionTabPanels from "./TransactionSectionTabPanels";

function MainWalletComponent() {

    const { control } = useForm<{ startDate: Date | null , endDate: Date | null }>()
    const id = "transaction_section_tab"

    return(
        <div className="my-10 lg:mb-16 text-primary ">
            <h2 className={`${roboto_slab.className} text-2xl lg:text-3xl mt-4 font-bold mb-8 text-primary text-center`}>Fund your wallet to enjoy seamless transactions from start to finish</h2>
            <WalletCard />

            <div className="mt-12 md:w-3/4 md:mx-auto">
              <CustomDuoDatePickerInput  containerClassName="md:w-[22em] md:mx-auto" control={control} name={["startDate","endDate"]} />
              <TransactionSectionTablist id={id} />
              <TransactionSectionTabPanels id={id} />
            </div>
        </div>
    )
}

export default MainWalletComponent;