"use client"

import CustomBasicSelect from "@/components/assets/inputs/CustomBasicSelect";
import { transactionSelectOptionsData } from "@/componentsData/transactionSelectOptionsData";
import { useForm } from "react-hook-form";
import TabPanelTransactionHistoryTabel from "../TabPanelTransactionHistoryTabel";
import CustomQuotePageSelect from "@/components/assets/inputs/CustomQuotePageSelect";

export default function ShipmentPanel({ id }:{ id:string }){

    const { control } = useForm<{filterBy: {label:string, value:string}}>({
        defaultValues: { filterBy: {
            label: "",
            value: "",
        }}
    })

    return(
        <div id={`${id}-panel2`}>
            <div className="md:flex items-center justify-between mb-8 md:my-8 text-primary">
                <h2 className="font-semibold text-xl my-8 md:my-0 text-center">Shipment History</h2>
                <div>
                    <CustomQuotePageSelect 
                        id={`${id}-shipment-filter`}
                        control={control} 
                        name="filterBy"
                        hasError={false}
                        required={false} 
                        data={transactionSelectOptionsData} 
                        placeholder="Filter by status"
                        optionStyles={{ height: "2em"}}
                    />
                </div>
            </div>
            <TabPanelTransactionHistoryTabel />
        </div>
    )
}