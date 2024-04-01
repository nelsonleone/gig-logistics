"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function OutBoundShippingItemCategoryPicker() {

    const pathName = usePathname()

    return (
        <div className="bg-gray-300 p-[.4em] flex justify-between gap-3 rounded h-14 mb-8 md:w-80 md:mx-auto">
            <Link className={`${pathName === "/app-panel/outbound-shipment/document-item" ? "bg-white" : "bg-transparent"} w-1/2 flex justify-center items-center text-sm rounded-sm p-2 text-center hover:bg-white`} href="/app-panel/outbound-shipment/document-item">Document</Link>
            <Link className={`${pathName === "/app-panel/outbound-shipment/nondocument-item" ? "bg-white" : "bg-transparent"} w-1/2 flex justify-center items-center text-sm rounded-sm p-2 text-center hover:bg-white`} href="/app-panel/outbound-shipment/nondocument-item">Non-document</Link>
        </div>
    )
}

export default OutBoundShippingItemCategoryPicker;