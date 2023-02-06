import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, authSlice } from "./auth/authSlice";
import { JobsSlice,JobsSliceProps } from "./Jobs/JobsSlice";
import { uiSlice, UiSliceProps } from "./ui/UiSlice";

export interface StoreReducers{
    auth: AuthSlice;
    jobs: JobsSliceProps,
    ui: UiSliceProps
}

export const store  = configureStore<StoreReducers>({
    reducer:{
        auth:authSlice.reducer,
        jobs:JobsSlice.reducer,
        ui:uiSlice.reducer
    }
})