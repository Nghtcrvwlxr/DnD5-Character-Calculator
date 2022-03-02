import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    showInfo: boolean;
    race: string;
    class: string;
    background: string;
}

const initialState: CalculatorState = {
    showInfo: false,
    "race": '',
    "class": '',
    "background": '',
};

const calculatorSlice = createSlice({
    name: 'calculatorReducer',
    initialState,
    reducers: {
        hideInformation(state) {
            state.showInfo = false;
        },
        selectField(state, action: PayloadAction<{field: any, name: string}>) {
            // @ts-ignore
            state[action.payload.field] = action.payload.name;
            state.showInfo = true;
        },
        clearField(state, action: PayloadAction<string>) {
            // @ts-ignore
            state[action.payload] = '';
        },
    }
});

export const {reducer: calculatorReducer} = calculatorSlice;

export const {
    hideInformation,
    selectField,
    clearField} = calculatorSlice.actions;
