"use client"

import { inter } from "@/app/fonts";
import { TransactionSectionTabName } from "@/enums";
import { SetStateAction, Dispatch } from "react";


function TransactionSectionTablist({ id, setCurrentTab, currentTab }:{ id:string, currentTab: TransactionSectionTabName, setCurrentTab: Dispatch<SetStateAction<TransactionSectionTabName>> }) {

    return (
        <div role="tablist" aria-label="Transaction Section Tab" className="bg-base-color1 p-4 rounded items-center flex justify-center gap-4 h-24 md:h-16 md:w-[33em] md:mx-auto">
            <button
                className={`
                    ${currentTab !== TransactionSectionTabName.Shipments && currentTab !== TransactionSectionTabName.InternationalShipments ? "base-color2 after:bg-base-color2" : "text-primary"} ${inter.className} after:block after:left-0 after:right-0 after:mx-auto after:absolute after:h-1 after:-bottom-4 flex-grow after:transition after:duration-200 after:ease-linear after:w-full font-bold relative h-full uppercase text-sm`
                }
                role="tab"
                onClick={() => setCurrentTab(TransactionSectionTabName.Wallet)}
                aria-selected={
                    currentTab !== TransactionSectionTabName.Shipments &&
                    currentTab !== TransactionSectionTabName.InternationalShipments ? "true" : "false"
                }
                aria-controls={`${id}-panel1`}
                id={`${id}-tab1`}
                tabIndex={0}
                >
               Wallet
            </button>

            <button
                className={`
                ${currentTab === TransactionSectionTabName.Shipments ? "base-color2 after:bg-base-color2" : "text-primary"} ${inter.className} after:w-full after:block after:left-0 after:right-0 after:mx-auto after:absolute after:h-1 after:-bottom-4 flex-grow after:transition after:duration-200 after:ease-linear font-bold relative h-full uppercase text-sm`
                }
                role="tab"
                onClick={() => setCurrentTab(TransactionSectionTabName.Shipments)}
                aria-selected={
                    currentTab === TransactionSectionTabName.Shipments ? "true" : "false"
                }
                aria-controls={`${id}-panel2`}
                id={`${id}-tab2`}
                tabIndex={0}
                >
               Shipment
            </button>

            <button
                className={`
                    ${currentTab === TransactionSectionTabName.InternationalShipments ? "base-color2 after:bg-base-color2" : "text-primary"} ${inter.className} after:block after:left-0 after:right-0 after:mx-auto after:absolute after:h-1 after:-bottom-4 flex-grow after:transition after:duration-200 after:ease-linear after:w-full font-bold relative h-full uppercase text-sm`
                }
                role="tab"
                onClick={() => setCurrentTab(TransactionSectionTabName.Shipments)}
                aria-selected={
                    currentTab === TransactionSectionTabName.InternationalShipments ? "true" : "false"
                }
                aria-controls={`${id}-panel3`}
                id={`${id}-tab3`}
                tabIndex={0}
                >
               International Shipment
            </button>
        </div>
    )
}

export default TransactionSectionTablist;