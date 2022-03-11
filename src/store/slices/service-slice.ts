import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ServiceState {
    data: any[],
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
            return {
                data: [],
                loading: true,
                error: null,
            };
        },
        dataLoaded(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.data = action.payload;
        },
        dataError() {
            return {
                data: [],
                loading: false,
                error: true,
            };
        },
        dataCleared(state) {
            return state = initialState;
        }
    }
});

export const {reducer: serviceReducer} = serviceSlice;

export const {dataRequested, dataLoaded, dataError, dataCleared} = serviceSlice.actions;
