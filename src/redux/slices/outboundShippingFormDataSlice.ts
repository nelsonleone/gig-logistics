import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OutBoundShippingReceiverInfo, OutboundShippingFormData } from "../../../types";
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
        }
    }
})


export const { setReceiverInfo, setSenderInfo, setVehicleInfo } = outboundShippingFormDataSlice.actions;

export default outboundShippingFormDataSlice.reducer;