"use client"

import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { domesticDepartureDestinationAreaData } from "@/componentsData/departureAndDestinationreasData";
import CustomQuotePageSelect from '@/components/assets/inputs/CustomQuotePageSelect';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DomesticQuoteObj, IQuoteResultModalData } from "../../types";
import GetQuoteBtn from "./assets/Buttons/GetQuoteBtn";
import { useState } from "react";
import { useAppDispatch } from "@/redux/customHooks";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity } from "@/enums";
import { getDomesticQuoteResultModalData } from "@/helperFns/getDomesticQuoteResultData";
import QuoteResultModal from "./assets/PopUps/QuoteResultModal";

export default function DomesticQuotePageMainCP(){

    const { handleSubmit, formState: { errors }, control, register } = useForm<DomesticQuoteObj>({
        defaultValues: {
            "quote_origin": null,
            "quote_destination": null
        }
    })

    const [gettingQuote,setGettingQuote] = useState(false)
    const [resultModalData,setResultModalData] = useState<IQuoteResultModalData>({ weight:"", quantity:"", totalCostForShipment: 0})
    const [showResultModal,setShowResultModal] = useState(false)
    const dispatch = useAppDispatch()

    const handleDmstFormSubmit : SubmitHandler<DomesticQuoteObj> = async(data) => {
        try{  
            setGettingQuote(true)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            setResultModalData(getDomesticQuoteResultModalData(data))
            setShowResultModal(true)
        }
        catch(err){
            dispatch(setShowAlert({ mssg: "Error Getting Estimated Quote", severity: AlertSeverity.ERROR}))
        }
        finally{
            setGettingQuote(false)
        }
    }

    return(
        <AppPanelMCContainer className="relative">
            <QuoteResultModal packageType={resultModalData.resultPackageType} open={showResultModal} handleClose={() => setShowResultModal(false)} {...resultModalData} />
            <BackBtn />
            <div className="md:w-2/4 md:mx-auto">
                <h2 className="my-8 font-semibold text-center md:text-lg">Get a quick quote for your item with an estimated cost.</h2>

                <form className="pb-8" onSubmit={handleSubmit(handleDmstFormSubmit)}>
                    <div className="quote_dmst_input_container">
                        <label htmlFor="quote_origin" className="quote_dmst_form_label">Origin</label>
                        <CustomQuotePageSelect
                            name="country"  
                            id="quote_origin" 
                            control={control}
                            selectStyles={{
                                height: "3.1em",
                                borderRadius: "6px"
                            }}
                            required="Sender Station is required"  
                            placeholder='Origin' 
                            hasError={errors?.quote_origin?.message ? true : false}
                            data={domesticDepartureDestinationAreaData}
                            optionStyles={{
                                color: "#374151"
                            }}
                        />                        {
                            errors.quote_origin && 
                            <p role="error" className="text-xs mt-2 text-primary2">{errors.quote_origin?.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor="destination" className="quote_dmst_form_label">Destination</label>
                        <CustomQuotePageSelect
                            name="country"  
                            id="quote_destination"
                            control={control}
                            selectStyles={{
                                height: "3.1em",
                                borderRadius: "6px"
                            }}   
                            required="Reciever's Station is required" 
                            placeholder='Destination'
                            hasError={errors?.quote_destination?.message ? true : false}
                            data={domesticDepartureDestinationAreaData}
                            optionStyles={{
                                color: "#374151"
                            }}
                        />                        {
                            errors.quote_destination && 
                            <p role="error" className="text-xs mt-2 text-primary2">{errors.quote_destination?.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor='quote_quantity' className="quote_dmst_form_label">Quantity</label>
                        <input type="number" placeholder="Enter Quantity" id="'quote_quantity" className={`quote_dmst_number_input ${errors.quote_quantity ? "border border-primary2" : ""}`} min={1} {...register("quote_quantity",{ required: "Quantity is required" })} />
                        {
                            errors.quote_quantity && 
                            <p role="error" className="text-xs mt-2 text-primary2">{errors.quote_quantity?.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor='quote_weight' className="quote_dmst_form_label">Weight (KG)</label>
                        <input type="number" placeholder="Enter Weight" id="'quote_weight" className={`quote_dmst_number_input ${errors.quote_weight ? "border border-primary2" : ""}`} min={1} {...register("quote_weight",{ required: "Weight is required" })} />
                        {
                            errors.quote_weight && 
                            <p role="error" className="text-xs mt-2 text-primary2">{errors.quote_weight?.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor='quote_value' className="quote_dmst_form_label">Value (Naira)</label>
                        <input type="number" placeholder="Enter Value" id="'quote_value" className={`quote_dmst_number_input ${errors.quote_quantity ? "border border-primary2" : ""}`} min={1} {...register("quote_value",{ required: "Value is required" })} />
                        {
                            errors.quote_value && 
                            <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_value?.message}</p>
                        }
                    </div>

                    <GetQuoteBtn isLoading={gettingQuote} text="Get Quote"  />
                </form>
            </div>
        </AppPanelMCContainer>
    )
}