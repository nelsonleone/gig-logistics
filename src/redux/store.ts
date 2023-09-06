import { configureStore } from "@reduxjs/toolkit";
import openNavReducer from "./slices/openNavSlice";
import alertReducer from "./slices/alertSlice";

const reduxStore = configureStore({
    reducer: {
        openNav: openNavReducer,
        alert: alertReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;