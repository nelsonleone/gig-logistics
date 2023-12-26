"use client"

import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { ErrorOption, FieldError, SubmitHandler, useForm, useWatch } from "react-hook-form";
import CustomQuotePageSelect from "@/components/assets/inputs/CustomQuotePageSelect";
import { InternationalQuoteObj } from '../../types';
import { countriesNamesArray } from '@/componentsData/countries';
import { inter } from "@/app/fonts";
import { documentQuotePackageTypeInputData, nonDocumentQuotePackageTypeInputData } from "@/componentsData/NonDocumentQuotePackageTypeInputsData";
import { NDPackageTypeInputIds } from "@/enums";

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
        return { label: val.name.toUpperCase(), value: val.name }
    })

    const packageTypeSelectData = [{ label: "Document",value: "document" },{ label: "Non-Document",value: "non-document"}]

    const handleIntlQuoteDataSubmit : SubmitHandler<InternationalQuoteObj> = (data) => {
        console.log(data)
    }

    return(
        <AppPanelMCContainer className="relative">
            <BackBtn />

            <form className="md:w-1/2 md:mx-auto py-8" onSubmit={handleSubmit(handleIntlQuoteDataSubmit)}>
                <div className="mb-6">
                    <label htmlFor="quote_IntlDepartureCountry" className="quote_intl_input_label">Departure Country</label>
                    <CustomQuotePageSelect hasError={errors.quote_IntlDepartureCountry ? true : false} required="Departure Country is required" control={control} placeholder='Select Departure Country' id="quote_IntlDepartureCountry" data={data} />
                    {
                        errors.quote_IntlDepartureCountry && 
                        <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_IntlDepartureCountry.message}</p>
                    }
                </div>

                <div className="mb-6">
                    <label htmlFor="quote_IntlDestinationCountry" className="quote_intl_input_label">Destination Country</label>
                    <CustomQuotePageSelect hasError={errors.quote_IntlDestinationCountry ? true : false} required="Destination Country is required" control={control} placeholder='Select Destination Country' id="quote_IntlDestinationCountry" data={data} />
                    {
                        errors.quote_IntlDestinationCountry && 
                        <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_IntlDestinationCountry.message}</p>
                    }
                </div>

                <div className="mb-6">
                    <label htmlFor="quote_IntlAddress" className="quote_intl_input_label">Address</label>
                    <input 
                       type="text" 
                       id="quote_IntlAddress"
                       className={`border ${errors.quote_IntlAddress ? "border-red-500" : "border-gray-300"} rounded-lg p-3 block w-full placeholder:text-[.9rem] placeholder:capitalize`}
                       placeholder="Enter Address" {...register("quote_IntlAddress",{ required: "Address Is Required", minLength: { value: 1, message: "Enter a valid Address"} })} 
                    />
                    {
                        errors.quote_IntlAddress && 
                        <p role="error" className="text-xs mt-2 text-red-600">{errors.quote_IntlAddress.message?.toString()}</p>
                    }
                </div>

                <div className="flex gap-3 justify-between mb-6">
                    <div className="w-1/2">
                        <label htmlFor="quote_city" className="quote_intl_input_label">City</label>
                        <input 
                           type="text" 
                           id="quote_city" 
                           placeholder="City" {...register("quote_city")} 
                           className="border border-gray-300 rounded-md p-2 block w-full placeholder:text-[.9rem] placeholder:capitalize"
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="quote_zipCode" className="quote_intl_input_label">Zip Code</label>
                        <input 
                            type="text" 
                            id="quote_zipCode" 
                            className="border border-gray-300 rounded-md p-2 block w-full placeholder:text-[.9rem] placeholder:capitalize"
                            placeholder="Zip Code" {...register("quote_zipCode")}
                        />
                    </div>
                </div>
                
                <div className="my-6">
                    <h3 className="font-semibold text-gray-400 my-4">Item Details</h3>
                    <label className="quote_intl_input_label" htmlFor="quote_packageType">Package Type</label>
                    <CustomQuotePageSelect hasError={errors.quote_packageType ? true : false} required="Document Type is required" control={control} placeholder='Select Document Type' id="quote_packageType" data={packageTypeSelectData} />
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
                                        className={`border border-gray-300 ${val.id === NDPackageTypeInputIds.quote_IntlQuantity && errors.nonDocument?.quantity || val.id === NDPackageTypeInputIds.quote_IntlValue && errors.nonDocument?.value ? "border-red-500" : ""} rounded-md p-2 block w-full placeholder:text-[.9rem] placeholder:capitalize`}
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
                                        className={`border border-gray-300 ${errors.document?.quantity || errors.document?.value ? "border-red-500" : ""} rounded-md p-2 block w-full placeholder:text-[.9rem] placeholder:capitalize`}
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

                <button className={`${inter.className} my-12 bg-black text-white font-medium text-center p-3 rounded-md w-full block cursor-pointer lg:w-3/4 lg:mx-auto hover:drop-shadow-lg hover:opacity-90 transition-all duration-200 ease-in-out`}>
                    Get Quote
                </button>
            </form>
        </AppPanelMCContainer>
    )
}

export default InternationalQuotePageMainCP;