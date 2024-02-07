"use client"

import { TransactionSectionTabName } from "@/enums"
import { useSearchParams } from "next/navigation"
import WalletPanel from "./TransactionSectionTabPanels/WalletPanel"
import ShipmentPanel from "./TransactionSectionTabPanels/ShipmentPanel"
import IntlShipmentPanel from "./TransactionSectionTabPanels/IntlShipmentPanel"

export default function TransactionSectionTabPanels({ id }:{ id:string }){

    const { get } = useSearchParams()
    const tabName = get('tab')

    return(
        tabName === TransactionSectionTabName.Wallet ?
        <WalletPanel id={id} />
        :
        tabName === TransactionSectionTabName.Shipments
        ?
        <ShipmentPanel id={id} />
        :
        tabName === TransactionSectionTabName.InternationalShipments 
        ?
        <IntlShipmentPanel id={id} />
        :
        <WalletPanel id={id} />
    )
}