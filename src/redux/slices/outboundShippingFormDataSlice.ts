import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OutBoundShippingItem, OutBoundShippingReceiverInfo, OutboundShippingFormData } from "../../../types";
import { OutBoundShippingSenderInfoPickup, ShippingVehicles } from "@/enums";

interface OutBoundShippingSenderInfo2 {
    name: string,
    address: string,
    phoneNumber: string,
    email: string,
    pickupTime: OutBoundShippingSenderInfoPickup | string,
    pickupTimeLater?: number
}

const initialState : Partial<OutboundShippingFormData> = {
    shipmentItems: []
}

const outboundShippingFormDataSlice = createSlice({
    name: "outboundShippingFormDataSlice",
    initialState,
    reducers: {
        setReceiverInfo: (state, { payload }:PayloadAction<OutBoundShippingReceiverInfo>) => {
            state.receiverInfo = payload
        },
        setSenderInfo: (state, { payload }:PayloadAction<OutBoundShippingSenderInfo2>) => {
            state.senderInfo = payload
        },
        setVehicleInfo: (state, { payload }:PayloadAction<ShippingVehicles>) => {
            state.vehicleInfo = payload
        },
        setItems: (state, { payload }:PayloadAction<OutBoundShippingItem>) => {
            if(!state.shipmentItems){
                state.shipmentItems = []
            }
            state.shipmentItems = [...state.shipmentItems,payload]
        },
        setDeleteOutBoundShippingItem:  (state, { payload }:PayloadAction<{ id:string }>) => {
            state.shipmentItems = state.shipmentItems?.filter(item => item.id !== payload.id)
        },
        clearOutBoundShippingFormData: state => {
            state.receiverInfo = undefined;
            state.senderInfo = undefined;
            state.shipmentItems = []
        }
    }
})


export const { setReceiverInfo, setSenderInfo, clearOutBoundShippingFormData, setVehicleInfo, setItems, setDeleteOutBoundShippingItem } = outboundShippingFormDataSlice.actions;

export default outboundShippingFormDataSlice.reducer;