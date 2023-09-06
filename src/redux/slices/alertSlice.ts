import { AlertSeverity } from "@/enums";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    showAlert: boolean,
    alertMssg: string,
    severity: AlertSeverity | null
}

interface IPayload {
    mssg: string,
    severity: AlertSeverity
}

const initialState : IinitialState = {
    showAlert: false,
    alertMssg: "",
    severity: null
}


const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setShowAlert: (state, { payload }:PayloadAction<IPayload>) => {
            state = {
                showAlert: true,
                alertMssg: payload.mssg,
                severity: payload.severity
            }
        },
        setHideAlert: state => {
            state = {
                showAlert: false,
                alertMssg: "",
                severity: null
            }
        }
    }
})

export const { setShowAlert, setHideAlert } = alertSlice.actions;

export default alertSlice.reducer;