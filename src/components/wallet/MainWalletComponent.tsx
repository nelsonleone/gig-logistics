"use client"

import { roboto_slab } from "@/app/fonts";
import WalletCard from "./WalletCard";
import CustomDuoDatePickerInput from "../CustomDuoDatePicker";
import { useForm, useWatch } from "react-hook-form";
import TransactionSectionTablist from "./TransactionSectionTablist";
import TransactionSectionTabPanels from "./TransactionSectionTabPanels";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { TransactionSectionTabName } from "@/enums";

function MainWalletComponent() {

    const { setValue, control } = useForm<{ startDate: Dayjs | null | undefined | undefined, endDate: Dayjs | null | undefined | undefined}>()
    const id = "transaction_section_tab"
    const startDate = useWatch({ name: 'startDate', control})
    const endDate = useWatch({ name: 'endDate', control})
    const [currentTab,setCurrentTab] = useState<TransactionSectionTabName>(TransactionSectionTabName.Wallet)

    return(
        <div className="my-10 lg:mb-16 text-primary ">
            <h2 className={`${roboto_slab.className} text-2xl lg:text-3xl mt-4 font-bold mb-8 text-primary text-center`}>Fund your wallet to enjoy seamless transactions from start to finish</h2>
            <WalletCard />

            <div className="mt-12 md:w-3/4 md:mx-auto">
              <CustomDuoDatePickerInput minDate={dayjs()} startDate={startDate} endDate={endDate}  containerClassName="md:w-[22em] md:mx-auto" setValue={setValue} name={["startDate","endDate"]} />
              <TransactionSectionTablist currentTab={currentTab} setCurrentTab={setCurrentTab} id={id} />
              <TransactionSectionTabPanels currentTab={currentTab} id={id} />
            </div>
        </div>
    )
}

export default MainWalletComponent;