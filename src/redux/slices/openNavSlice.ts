import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitState {
    openNav: boolean
}

const initialState : InitState = {
    openNav: false
}

const openNavSlice = createSlice({
    name: 'openNav',
    initialState,
    reducers: {
        setOpenNav: (state,{ payload }:PayloadAction<boolean>) => {
            state.openNav = payload
        }
    }
})

export const { setOpenNav } = openNavSlice.actions;
export default openNavSlice.reducer;