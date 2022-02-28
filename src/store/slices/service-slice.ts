import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Race, Class} from "../../utils/types";

interface ServiceState {
    data: Race[] | Class[],
    loading: boolean,
    error: boolean | null,
}

const initialState: ServiceState = {
    data: [],
    loading: true,
    error: null,
};

const serviceSlice = createSlice({
    name: 'serviceReducer',
    initialState,
    reducers: {
        dataRequested() {
            console.log('dataRequested');
            return {
                data: [],
                loading: true,
                error: null,
            };
        },
        dataLoaded(state, action: PayloadAction<Race[] | Class[]>) {
            console.log('dataLoaded');
            state.loading = false;
            state.data = action.payload;
        },
        dataError() {
            console.log('dataError');
            return {
                data: [],
                loading: false,
                error: true,
            };
        },
    }
});

export const {reducer: serviceReducer} = serviceSlice;

export const {dataRequested, dataLoaded, dataError} = serviceSlice.actions;
