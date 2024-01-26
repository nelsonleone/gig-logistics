import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthUser, SavedDropOffs, IUserNotifications  } from "../../../types";

interface IinitState extends AuthUser {
    notifications: IUserNotifications[],
    beenAuthenticated: boolean,
    xpressDropOffs: SavedDropOffs[]
}

const initialState : IinitState = {
    uid: "",
    email: "",
    picture: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    notifications: [],
    xpressDropOffs: [],
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
        },
        setSignOutAuthUser: (state) => {
            state.beenAuthenticated = false;
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.phoneNumber = "";
            state.picture = "";
            state.uid = "";          
            state.notifications = []
        },
        updatedDropOffsAfterCancel: (state,{ payload }:PayloadAction<{ dropOffID: string }>) => {
            state.xpressDropOffs = state.xpressDropOffs.filter(dropOff => {
                return dropOff.dropOffID !== payload.dropOffID
            })
        }
    }
})

export const { setAuthUserData, setSignOutAuthUser, updatedDropOffsAfterCancel } = authUser.actions

export default authUser.reducer;