import { configureStore } from "@reduxjs/toolkit";
import openNavReducer from "./slices/openNavSlice";

const reduxStore = configureStore({
    reducer: {
        openNav: openNavReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;