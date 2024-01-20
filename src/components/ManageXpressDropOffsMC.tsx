"use client"

import { useForm } from "react-hook-form"
import Demo from "./CustomDuoDatePicker"
import { SavedDropOffs } from "../../types"
import { Suspense } from "react"
import { MantineProvider } from "@mantine/core"

export default function ManageXpressDropOffsMC({ dropOffs }:{ dropOffs:SavedDropOffs[] }){

    const { control } = useForm<{ startDate: Date , endDate: Date }>()

    return(
        <section>
            <h1>Drop-Offs</h1>
            <MantineProvider>
              <Demo />
            </MantineProvider>
            <Suspense>

            </Suspense>
        </section>
    )
}