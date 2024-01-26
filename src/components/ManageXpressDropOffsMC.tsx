"use client"

import { useForm, useWatch } from "react-hook-form"
import CustomDuoDatePicker from "./CustomDuoDatePicker"
import { SavedDropOffs } from "../../types"
import { Suspense, useEffect, useState } from "react"
import { MantineProvider } from "@mantine/core"
import { MiniRingLoader } from "./assets/Loaders/RingLoader"
import SavedDropOffItem from "./SavedDropOffItem"
import { roboto_slab } from "@/app/fonts"
import { filterDropOffsBasedOnDate } from "@/helperFns/filterDropOffBasedOnDate"

export default function ManageXpressDropOffsMC({ dropOffs }:{ dropOffs:SavedDropOffs[] }){

    const { control } = useForm<{ startDate: Date | null , endDate: Date | null }>()
    const startDate = useWatch({ control, name: 'startDate'})
    const endDate = useWatch({ control, name: 'endDate'})
    const [filteredDropOffs,setFilteredDropOffs] = useState<SavedDropOffs[]>([])



    useEffect(() => {
        setFilteredDropOffs(filterDropOffsBasedOnDate(startDate,endDate,dropOffs))
    },[startDate,endDate])

    return(
        <section className="">
            <div className="mx-auto md:w-[25em]">
                <h1 className={`${roboto_slab.className} text-center text-2xl md:text-3xl font-bold mb-8`}>Drop-Offs</h1>
                <MantineProvider>
                <CustomDuoDatePicker control={control} name={["startDate","endDate"]} />
                </MantineProvider>
            </div>
            <div className="relative pb-12">
                <Suspense fallback={<MiniRingLoader />}>
                    {
                    
                    startDate && endDate ?
                            filteredDropOffs.length ?
                            filteredDropOffs.map(item => (
                                <SavedDropOffItem key={item.dropOffID} {...item} />
                            ))
                            :
                            <p className="text-sm font-medium text-center mx-auto">No DropOffs Found</p>
                        :
                        dropOffs.length ?
                        dropOffs.map(item => (
                            <SavedDropOffItem key={item.dropOffID} {...item} />
                        ))
                        :
                        <p className="text-sm font-medium text-center mx-auto">No DropOffs Found</p>
                    }
                </Suspense>
            </div>
        </section>
    )
}

