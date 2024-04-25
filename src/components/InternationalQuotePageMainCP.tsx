"use client"

import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { ErrorOption, FieldError, SubmitHandler, useForm, useWatch } from "react-hook-form";
import CustomQuotePageSelect from "@/components/assets/inputs/CustomQuotePageSelect";
import { IQuoteResultModalData, InternationalQuoteObj } from '../../types';
import { countriesNamesArray } from '@/componentsData/countries';
import { inter } from "@/app/fonts";
import { documentQuotePackageTypeInputData, nonDocumentQuotePackageTypeInputData } from "@/componentsData/NonDocumentQuotePackageTypeInputsData";
import { AlertSeverity, NDPackageTypeInputIds } from "@/enums";
import { useAppDispatch } from "@/redux/customHooks";
import { useState } from "react";
import { getDomesticQuoteResultModalData } from "@/helperFns/getDomesticQuoteResultData";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { getIntlQuoteResultData } from "@/helperFns/getIntlQuoteResultData";
import QuoteResultModal from "./assets/PopUps/QuoteResultModal";
import GetQuoteBtn from "./assets/Buttons/GetQuoteBtn";
import CustomTextInput from "./assets/inputs/CustomTextInput";

function InternationalQuotePageMainCP(){

    const { handleSubmit, watch, formState: { errors }, control, register } = useForm<InternationalQuoteObj>({
        defaultValues: {
            "quote_IntlDepartureCountry": null,
            "quote_IntlAddress": "",
            "quote_IntlDestinationCountry": null,
            "quote_city": "",
            "quote_zipCode": ""
        }
    })

    const packageType = useWatch({ control, name: "quote_packageType.value" })

    const data : { label:string, value:string }[] = countriesNamesArray.map(val => {
        return { label: val.name?.toUpperCase(), value: val.name }
    })

    const packageTypeSelectData = [{ label: "Document",value: "document" },{ label: "Non-Document",value: "non-document"}]

    const [gettingQuote,setGettingQuote] = useState(false)
    const [resultModalData,setResultModalData] = useState<IQuoteResultModalData>({ weight:"", quantity:"", totalCostForShipment: 0})
    const [showResultModal,setShowResultModal] = useState(false)
    const dispatch = useAppDispatch()

    const handleIntlQuoteDataSubmit : SubmitHandler<InternationalQuoteObj> = async(data) => {

        try{  
            setGettingQuote(true)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            setResultModalData(getIntlQuoteResultData(data))
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
            <BackBtn />
            <QuoteResultModal 
               quantity={resultModalData.quantity} 
               weight={resultModalData.weight} 
               totalCostForShipment={resultModalData.totalCostForShipment} 
               packageType={resultModalData.resultPackageType}
               open={showResultModal} 
               handleClose={() => setShowResultModal(false)} 
            />

            <form className="md:w-1/2 md:mx-auto py-8" onSubmit={handleSubmit(handleIntlQuoteDataSubmit)}>
                <div className="mb-6">
                    <label htmlFor="quote_IntlDepartureCountry" className="quote_intl_input_label">Departure Country</label>
                    <CustomQuotePageSelect name="quote_IntlDepartureCountry" hasError={errors.quote_IntlDepartureCountry ? true : false} required="Departure Country is required" control={control} placeholder='Select Departure Country' id="quote_IntlDepartureCountry" data={data} />
                    {
                        errors.quote_IntlDepartureCountry && 
                        <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_IntlDepartureCountry.message}</p>
                    }
                </div>

                <div className="mb-6">
                    <label htmlFor="quote_IntlDestinationCountry" className="quote_intl_input_label">Destination Country</label>
                    <CustomQuotePageSelect name="quote_IntlDestinationCountry" hasError={errors.quote_IntlDestinationCountry ? true : false} required="Destination Country is required" control={control} placeholder='Select Destination Country' id="quote_IntlDestinationCountry" data={data} />
                    {
                        errors.quote_IntlDestinationCountry && 
                        <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_IntlDestinationCountry.message}</p>
                    }
                </div>

                <div className="mb-6">
                    <CustomTextInput 
                        name="quote_IntlAddress" 
                        control={control} 
                        placeholder="Enter Address"
                        label="Address"
                        id="quote_IntlAddress" 
                        error={errors.quote_IntlAddress?.message}
                        containerStyles="w-full"
                        inputStyles="w-full z-20 border z-20 border-gray-400 rounded-lg p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
                    />
                </div>

                <div className="flex gap-3 justify-between mb-6">
                    <div className="w-1/2">
                        <CustomTextInput 
                            name="quote_city" 
                            control={control} 
                            placeholder="Enter city"
                            label="City"
                            id="quote_city" 
                            error={errors.quote_city?.message}
                            containerStyles="w-full"
                            inputStyles="w-full z-20 border z-20 border-gray-400 rounded-lg p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
                        />
                    </div>
                    <div className="w-1/2">
                        <CustomTextInput 
                            name="quote_zipCode" 
                            control={control} 
                            placeholder="Enter zip code"
                            label="Zip Code"
                            id="quote_zipCode" 
                            error={errors.quote_zipCode?.message}
                            containerStyles="w-full"
                            inputStyles="w-full z-20 border z-20 border-gray-400 rounded-lg p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
                        />
                    </div>
                </div>
                
                <div className="my-6">
                    <h3 className="font-semibold text-gray-400 my-4">Item Details</h3>
                    <label className="quote_intl_input_label" htmlFor="quote_packageType">Package Type</label>
                    <CustomQuotePageSelect name="quote_packageType" hasError={errors.quote_packageType ? true : false} required="Document Type is required" control={control} placeholder='Select Document Type' id="quote_packageType" data={packageTypeSelectData} />
                    {
                        errors.quote_packageType && 
                        <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_packageType.message}</p>
                    }
                </div>

                {
                    packageType === 'non-document' ?
                    <div className="grid grid-cols-3 grid-rows-2 gap-3">
                        {
                            nonDocumentQuotePackageTypeInputData.map(val => (
                                <div className="" key={val.id}>
                                    <label htmlFor={val.id} className="quote_intl_input_label">{val.label}</label>
                                    <input 
                                        type={val.type} 
                                        id={val.id}
                                        {...register(val.name as keyof InternationalQuoteObj, { required: val.id === NDPackageTypeInputIds.quote_IntlQuantity ? "Quantity Is Required" : NDPackageTypeInputIds.quote_IntlValue ? "Value Is Required" : false})}
                                        className={`border border-gray-300 ${val.id === NDPackageTypeInputIds.quote_IntlQuantity && errors.nonDocument?.quantity || val.id === NDPackageTypeInputIds.quote_IntlValue && errors.nonDocument?.value ? "border-primary2" : ""} rounded-md p-2 block w-full placeholder:text-[.9rem] placeholder:capitalize`}
                                    />
                                    {
                                        val.id === NDPackageTypeInputIds.quote_IntlQuantity && errors.nonDocument?.quantity && 
                                        <p role="error" className="text-xs mt-2 text-red-600">{errors.nonDocument.quantity.message}</p>
                                    }
                                    {
                                        val.id === NDPackageTypeInputIds.quote_IntlValue && errors.nonDocument?.value && 
                                        <p role="error" className="text-xs mt-2 text-red-600">{errors.nonDocument.value.message}</p>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    :
                    packageType === 'document' ?
                    <div className="flex gap-4 justify-between">
                        {
                            documentQuotePackageTypeInputData.map(val => (
                                <div className="" key={val.id}>
                                    <label htmlFor={val.id} className="quote_intl_input_label">{val.label}</label>
                                    <input 
                                        type={val.type} 
                                        id={val.id}
                                        {...register(val.name as keyof InternationalQuoteObj, { required: val.id === "quote_IntlQuantity2" ? "Quantity Is Required" : val.id === "quote_IntlValue2" ? "Value Is Required" : false})}
                                        className={`border border-gray-300 ${errors.document?.quantity || errors.document?.value ? "border-primary2" : ""} rounded-md p-2 block w-full placeholder:text-[.9rem] placeholder:capitalize`}
                                    />
                                    {
                                        val.id === "quote_IntlQuantity2" && errors.document?.quantity && 
                                        <p role="error" className="text-xs mt-2 text-red-600">{errors.document.quantity.message}</p>
                                    }
                                    {
                                        val.id === "quote_IntlValue2" && errors.document?.value && 
                                        <p role="error" className="text-xs mt-2 text-red-600">{errors.document.value.message}</p>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    :
                    null
                }

                <GetQuoteBtn isLoading={gettingQuote} text="Get Quote" />
            </form>
        </AppPanelMCContainer>
    )
}

export default InternationalQuotePageMainCP;