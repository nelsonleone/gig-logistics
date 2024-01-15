import { AlertSeverity } from "@/enums";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    showSnackbar: boolean,
    snackbarMssg: string,
    severity: AlertSeverity | undefined
}

interface IPayload {
    mssg: string,
    severity: AlertSeverity
}

const initialState : IinitialState = {
    showSnackbar: false,
    snackbarMssg: "",
    severity: undefined
}


const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        setShowSnackbar: (state, { payload }: PayloadAction<IPayload>) => {
            state.showSnackbar = true;
            state.snackbarMssg = payload.mssg;
            state.severity = payload.severity;
        },
        setHideSnackbar: state => {
            state.showSnackbar = false;
            state.snackbarMssg = "";
            state.severity = undefined;
        }
    }
})

export const { setShowSnackbar, setHideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;