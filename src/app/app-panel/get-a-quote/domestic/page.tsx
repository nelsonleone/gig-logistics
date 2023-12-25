"use client"

import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { domesticDepartureDestinationAreaData } from "@/componentsData/departureAndDestinationreasData";
import { DomesticQuoteObj } from '../../../../../types';
import CustomQuotePageSelect from '@/components/assets/inputs/CustomQuotePageSelect';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from "@mui/material";
import { inter } from "@/app/fonts";

export default function GetDomesticQuote(){

    const { handleSubmit, formState: { errors }, control, register } = useForm<DomesticQuoteObj>({
        defaultValues: {
            "quote_origin": "",
            "quote_destination": ""
        }
    })

    const handleDmstFormSubmit : SubmitHandler<DomesticQuoteObj> = (data) => {
        console.log(data)
    }

    return(
        <AppPanelMCContainer className="relative">
            <BackBtn />
            <div className="md:w-2/4 md:mx-auto">
                <h2 className="my-8 font-semibold text-center md:text-lg">Get a quick quote for your item with an estimated cost.</h2>

                <form className="pb-8" onSubmit={handleSubmit(handleDmstFormSubmit)}>
                    <div className="quote_dmst_input_container">
                        <label htmlFor="quote_origin" className="quote_dmst_form_label">Origin</label>
                        <CustomQuotePageSelect control={control} placeholder='Origin' id="quote_origin" data={domesticDepartureDestinationAreaData} />
                        {
                            errors.quote_origin && 
                            <p role="error" className="text-xs mt-2 text-red-500">{errors.quote_origin.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor="destination" className="quote_dmst_form_label">Destination</label>
                        <CustomQuotePageSelect control={control} placeholder='Destination' id="quote_destination" data={domesticDepartureDestinationAreaData} />
                        {
                            errors.quote_destination && 
                            <p role="error" className="text-xs mt-2 text-red-500">{errors.quote_destination.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor='quote_quantity' className="quote_dmst_form_label">Quantity</label>
                        <input type="number" placeholder="Enter Quantity" id="'quote_quantity" className="quote_dmst_number_input" min={1} {...register("quote_quantity",{ required: "Quantity is required" })} />
                        {
                            errors.quote_quantity && 
                            <p role="error" className="text-xs mt-2 text-red-500">{errors.quote_quantity.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor='quote_weight' className="quote_dmst_form_label">Weight (KG)</label>
                        <input type="number" placeholder="Enter Weight" id="'quote_weight" className="quote_dmst_number_input" min={1} {...register("quote_weight",{ required: "Weight is required" })} />
                        {
                            errors.quote_weight && 
                            <p role="error" className="text-xs mt-2 text-red-500">{errors.quote_weight.message}</p>
                        }
                    </div>

                    <div className="quote_dmst_input_container">
                        <label htmlFor='quote_value' className="quote_dmst_form_label">Value (Naira)</label>
                        <input type="number" placeholder="Enter Value" id="'quote_value" className="quote_dmst_number_input" min={1} {...register("quote_value",{ required: "Value is required" })} />
                        {
                            errors.quote_value && 
                            <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_value.message}</p>
                        }
                    </div>

                    <button className={`${inter.className} font-inter bg-black text-white font-semibold text-center p-3 rounded-md w-full block cursor-pointer lg:w-3/4 lg:mx-auto hover:drop-shadow-lg hover:opacity-90 transition-all duration-200 ease-in-out`}>Proceed</button>
                </form>
            </div>
        </AppPanelMCContainer>
    )
}