import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthUser, IUserNotifications } from "../../../types";

interface IinitState extends AuthUser {
    notifications: IUserNotifications[],
    beenAuthenticated: boolean
}

const initialState : IinitState = {
    uid: "",
    email: "",
    picture: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    notifications: [],
    beenAuthenticated: false
}

const authUser = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setAuthUserData: (state, { payload }:PayloadAction<Partial<IinitState>>) => {
            state.beenAuthenticated = payload.beenAuthenticated || state.beenAuthenticated;
            state.firstName = payload.firstName || state.firstName;
            state.lastName = payload.lastName || state.lastName;
            state.email = payload.email || state.email;
            state.phoneNumber = payload.phoneNumber || state.phoneNumber;
            state.picture = payload.picture || state.picture;
            state.uid = payload.uid || state.uid;
            state.notifications = payload.notifications || [];
        }
    }
})

export const { setAuthUserData } = authUser.actions

export default authUser.reducer;