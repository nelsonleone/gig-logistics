import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    showRingLoader: boolean
}

const initialState : IinitialState = {
    showRingLoader: false
}


const ringLoaderSlice = createSlice({
    name: 'ringLoader',
    initialState,
    reducers: {
        setShowRingLoader: (state, { payload }: PayloadAction<boolean>) => {
            state.showRingLoader = payload;
        }
    }
})

export const { setShowRingLoader } = ringLoaderSlice.actions;

export default ringLoaderSlice.reducer;