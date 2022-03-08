import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Attribute} from "../../utils/types";

interface CalculatorState {
    showInfo: boolean;
    race: string;
    class: string;
    background: string;
    attributes: Attribute[];
}

const initialState: CalculatorState = {
    showInfo: false,
    "race": '',
    "class": '',
    "background": '',
    attributes: [],
};

const calculatorSlice = createSlice({
    name: 'calculatorReducer',
    initialState,
    reducers: {
        toggleInformation(state) {
            state.showInfo = !state.showInfo;
        },
        hideInformation(state) {
            state.showInfo = false;
        },
        selectField(state, action: PayloadAction<{field: any, name: string}>) {
            // @ts-ignore
            state[action.payload.field] = action.payload.name;
            state.showInfo = true;
        },
        setAttributes(state, action: PayloadAction<Attribute[]>) {
            state.attributes = action.payload;
        },
    }
});

export const {reducer: calculatorReducer} = calculatorSlice;

export const {
    toggleInformation,
    hideInformation,
    selectField,
    setAttributes} = calculatorSlice.actions;
