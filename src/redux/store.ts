import { configureStore } from "@reduxjs/toolkit";
import openNavReducer from "./slices/openNavSlice";
import alertReducer from "./slices/alertSlice";
import authUserReducer from "./slices/authUser";
import ringLoaderReducer from "./slices/ringLoaderSlice";

const reduxStore = configureStore({
    reducer: {
        openNav: openNavReducer,
        alert: alertReducer,
        authUser: authUserReducer,
        ringLoader: ringLoaderReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;