"use client"

import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { useForm } from "react-hook-form";
import CustomQuotePageSelect from "@/components/assets/inputs/CustomQuotePageSelect";
import { InternationalQuoteObj } from '../../types';
import { countriesNamesArray } from '@/componentsData/countries';
import { inter } from "@/app/fonts";

function InternationalQuotePageMainCP(){

    const { handleSubmit, formState: { errors }, control, register } = useForm<InternationalQuoteObj>({
        defaultValues: {
            "quote_IntlDepartureCountry": "",
            "quote_IntlAddress": "",
            "quote_IntlDestinationCountry": "",
            "quote_city": "",
            "quote_zipCode": ""
        }
    })

    const data : { label:string, value:string }[] = countriesNamesArray.map(val => {
        return { label: val.name.toUpperCase(), value: val.name }
    })

    const packageTypeSelectData = [{ label: "Document",value: "document" },{ label: "Non-Document",value: "non-document"}]

    return(
        <AppPanelMCContainer>
            <BackBtn />

            <form>
                <div>
                    <label htmlFor="quote_IntlDepartureCountry">Departure Country</label>
                    <CustomQuotePageSelect control={control} placeholder='Select Departure Country' id="quote_IntlDepartureCountry" data={data} />
                    {
                        errors.quote_IntlDepartureCountry && 
                        <p role="error">{errors.quote_IntlDepartureCountry.message}</p>
                    }
                </div>

                <div>
                    <label htmlFor="quote_IntlDestinationCountry">Destination Country</label>
                    <CustomQuotePageSelect control={control} placeholder='Select Destination Country' id="quote_IntlDestinationCountry" data={data} />
                    {
                        errors.quote_IntlDestinationCountry && 
                        <p role="error">{errors.quote_IntlDestinationCountry.message}</p>
                    }
                </div>

                <div>
                    <label htmlFor="quote_IntlAddress">Address</label>
                    <input type="text" id="quote_IntlAddress" placeholder="Enter Address" {...register("quote_IntlAddress",{ required: "Address Is Required", minLength: { value: 1, message: "Enter a valid Address"} })} />
                    {
                        errors.quote_IntlAddress && 
                        <p role="error">{errors.quote_IntlAddress.message?.toString()}</p>
                    }
                </div>

                <div>
                    <div>
                        <label htmlFor="quote_city">City</label>
                        <input type="text" id="quote_city" placeholder="City" {...register("quote_city")} />
                        {
                            errors.quote_city && 
                            <p role="error">{errors.quote_city.message?.toString()}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="quote_zipCode">Zip Code</label>
                        <input type="text" id="quote_zipCode" placeholder="Zip Code" {...register("quote_zipCode")} />
                        {
                            errors.quote_zipCode && 
                            <p role="error">{errors.quote_zipCode.message?.toString()}</p>
                        }
                    </div>
                </div>
                
                <div>
                    <h3>Item Details</h3>
                    <label htmlFor="quote_packageType">Package Type</label>
                    <CustomQuotePageSelect control={control} placeholder='Select Document Type' id="quote_packageType" data={packageTypeSelectData} />
                    {
                        errors.quote_packageType && 
                        <p role="error">{errors.quote_packageType.message}</p>
                    }
                </div>

                <button className={`${inter.className} font-inter bg-black text-white font-semibold text-center p-3 rounded-md w-full block cursor-pointer lg:w-3/4 lg:mx-auto hover:drop-shadow-lg hover:opacity-90 transition-all duration-200 ease-in-out`}>
                    Get Quote
                </button>
            </form>
        </AppPanelMCContainer>
    )
}

export default InternationalQuotePageMainCP;