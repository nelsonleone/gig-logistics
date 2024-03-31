import { configureStore } from "@reduxjs/toolkit";
import openNavReducer from "./slices/openNavSlice";
import alertReducer from "./slices/alertSlice";
import snackbarReducer from "./slices/snackbarSlice";
import authUserReducer from "./slices/authUser";
import ringLoaderReducer from "./slices/ringLoaderSlice";
import overseasShippingItemsReducer from "./slices/overseasShippingItemsSlice";
import outboundShippingFormDataReducer from "./slices/outboundShippingFormDataSlice";

const reduxStore = configureStore({
    reducer: {
        openNav: openNavReducer,
        alert: alertReducer,
        snackbar: snackbarReducer,
        authUser: authUserReducer,
        ringLoader: ringLoaderReducer,
        overseasShippingItems: overseasShippingItemsReducer,
        outboundShipping: outboundShippingFormDataReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;