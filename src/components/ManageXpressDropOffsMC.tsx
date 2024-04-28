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
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { setDropOffs } from "@/redux/slices/authUser"
import { Dayjs } from "dayjs"

export default function ManageXpressDropOffsMC({ dropOffs }:{ dropOffs:SavedDropOffs[] }){

    const { control, setValue } = useForm<{ startDate: Dayjs | null | undefined , endDate: Dayjs | null | undefined }>()
    const startDate = useWatch({ control, name: 'startDate'})
    const endDate = useWatch({ control, name: 'endDate'})
    const [filteredDropOffs,setFilteredDropOffs] = useState<SavedDropOffs[]>([])
    const dispatch = useAppDispatch()
    const { xpressDropOffs } = useAppSelector(store => store.authUser)

    useEffect(() => {
        if(dropOffs && dropOffs.length){
            dispatch(setDropOffs(dropOffs))
        }
    },[dropOffs?.length])



    useEffect(() => {
        setFilteredDropOffs(filterDropOffsBasedOnDate(startDate,endDate,xpressDropOffs))
    },[startDate,endDate])

    return(
        <section className="">
            <div className="mx-auto md:w-[25em]">
                <h1 className={`${roboto_slab.className} text-center text-2xl md:text-3xl font-bold mb-8`}>Drop-Offs</h1>
                <MantineProvider>
                <CustomDuoDatePicker setValue={setValue} startDate={startDate} endDate={endDate} name={["startDate","endDate"]} />
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
                        xpressDropOffs.length ?
                        xpressDropOffs.map(item => (
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

