import CustomQuotePageSelect from "@/components/assets/inputs/CustomQuotePageSelect";
import { transactionSelectOptionsData } from "@/componentsData/transactionSelectOptionsData";
import TabPanelTransactionHistoryTabel from "../TabPanelTransactionHistoryTabel";
import { useForm } from "react-hook-form";

export default function IntlShipmentPanel({ id }:{ id:string }){

    const { control } = useForm<{filterBy: {label:string, value:string}}>({
        defaultValues: { filterBy: {
            label: "",
            value: "",
        }}
    })

    return(
        <div id={`${id}-panel3`}>
            <div className="md:flex items-center justify-between mb-8 md:my-8">
                <h2 className="font-semibold text-xl my-8 md:my-0 text-center">Shipment History</h2>
                <div className="flex justify-center items-center">
                    <CustomQuotePageSelect 
                        id={`${id}-shipment-filter`}
                        control={control} 
                        name="filterBy"
                        hasError={false}
                        required={false} 
                        data={transactionSelectOptionsData} 
                        placeholder="Filter by status"
                    />
                </div>
            </div>
            <TabPanelTransactionHistoryTabel />
        </div>
    )
}