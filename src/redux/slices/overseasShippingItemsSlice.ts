import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OverseasShippingSavedItemInfo } from "../../../types";

interface IinitialState {
    items: OverseasShippingSavedItemInfo[]
}

const initialState : IinitialState = {
    items: []
}


const overseasShippingItemsSlice = createSlice({
    name: 'overseasShippingItems',
    initialState,
    reducers: {
        setItem: (state, { payload }: PayloadAction<OverseasShippingSavedItemInfo>) => {
            state.items = [...state.items,payload]
        },
        removeItem: (state, { payload }: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter(item => item.id !== payload.id)
        }
    }
})

export const { setItem, removeItem } = overseasShippingItemsSlice.actions;

export default overseasShippingItemsSlice.reducer;