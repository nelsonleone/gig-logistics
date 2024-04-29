"use client"

import { TransactionSectionTabName } from "@/enums"
import WalletPanel from "./TransactionSectionTabPanels/WalletPanel"
import ShipmentPanel from "./TransactionSectionTabPanels/ShipmentPanel"
import IntlShipmentPanel from "./TransactionSectionTabPanels/IntlShipmentPanel"

export default function TransactionSectionTabPanels({ id, currentTab }:{ id:string, currentTab: TransactionSectionTabName }){

    return(
        currentTab === TransactionSectionTabName.Wallet ?
        <WalletPanel id={id} />
        :
        currentTab === TransactionSectionTabName.Shipments
        ?
        <ShipmentPanel id={id} />
        :
        currentTab === TransactionSectionTabName.InternationalShipments 
        ?
        <IntlShipmentPanel id={id} />
        :
        <WalletPanel id={id} />
    )
}