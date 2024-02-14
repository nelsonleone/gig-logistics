import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthUser, SavedDropOffs, IUserNotifications  } from "../../../types";
import { AuthUserWalletPinStatus } from "@/enums";

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
    beenAuthenticated: false,
    walletPinStatus: undefined
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
        setDropOffs: (state, { payload }:PayloadAction<SavedDropOffs[]>) => {
            state.xpressDropOffs = payload;
        },
        updatedDropOffsAfterCancel: (state,{ payload }:PayloadAction<{ dropOffID: string }>) => {
            const updatedDropOffsArray = state.xpressDropOffs.filter(dropOff => {
                return dropOff.dropOffID !== payload.dropOffID
            })

            state.xpressDropOffs = updatedDropOffsArray;
        },

        setWalletPinStatus: (state,{ payload }:PayloadAction<AuthUserWalletPinStatus>) => {
            state.walletPinStatus = payload
        }
    }
})

export const { setAuthUserData, setDropOffs, setWalletPinStatus,  setSignOutAuthUser, updatedDropOffsAfterCancel } = authUser.actions

export default authUser.reducer;