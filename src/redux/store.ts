import { configureStore } from "@reduxjs/toolkit";
import openNavReducer from "./slices/openNavSlice";
import alertReducer from "./slices/alertSlice";
import authUserReducer from "./slices/authUser";

const reduxStore = configureStore({
    reducer: {
        openNav: openNavReducer,
        alert: alertReducer,
        authUser: authUserReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;