import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Thunk } from "../store";

interface CalculatorState extends Record<string, any> {
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
        selectField(state, action: PayloadAction<{ field: string, name: string }>) {
            state[action.payload.field] = action.payload.name;
            state.showInfo = true;
        },
        clearField(state, action: PayloadAction<string>) {
            state[action.payload] = '';
        },
    }
});

export const { reducer: calculatorReducer } = calculatorSlice;

export const {
    hideInformation,
    selectField,
    clearField
} = calculatorSlice.actions;
