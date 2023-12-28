import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthUser, IUserNotifications } from "../../../types";

interface IinitState extends AuthUser {
    notification: IUserNotifications[]
}

const initialState : IinitState = {
    id: "",
    email: "",
    picture: "",
    given_name: "",
    family_name: "",
    notification: []
}

const authUser = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setAuthUserData: (state, { payload }:PayloadAction<Partial<AuthUser>>) => {
            state = {...state,...payload }
        }
    }
})

export const { setAuthUserData } = authUser.actions

export default authUser.reducer;