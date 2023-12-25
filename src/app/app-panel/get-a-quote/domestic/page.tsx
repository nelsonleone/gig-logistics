"use client"


import { useState } from 'react'
import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { domesticDepartureDestinationAreaData } from "@/componentsData/departureAndDestinationreasData";
import { DomesticQuoteObj } from '../../../../../types';
import CustomSelect from '@/components/assets/inputs/CustomSelect';
import { useForm } from 'react-hook-form';

export default function GetDomesticQuote(){

    const { handleSubmit, formState: { errors }, control } = useForm<DomesticQuoteObj>({
        defaultValues: {
            origin: "",
            destination: ""
        }
    })

    return(
        <AppPanelMCContainer>
            <BackBtn />
            <div>
                <h2>Get a quick quote for your item with an estimated cost.</h2>

                <div>
                    <div>
                        <label htmlFor="origin">Origin</label>
                        <CustomSelect control={control} placeholder='Origin' id="origin" data={domesticDepartureDestinationAreaData} />
                        {
                            errors.origin && 
                            <p role="error"></p>
                        }
                    </div>

                    <div>
                        <label htmlFor="destination">Destination</label>
                        <CustomSelect control={control} placeholder='Destination' id="destination" data={domesticDepartureDestinationAreaData} />
                        {
                            errors.destination && 
                            <p role="error"></p>
                        }
                    </div>
                </div>
            </div>
        </AppPanelMCContainer>
    )
}