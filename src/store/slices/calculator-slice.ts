import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Attribute} from "../../utils/types";

interface CalculatorState extends Record<string, any>{
    showInfo: boolean;
    race: any;
    class: any;
    background: any;
    attributes: Attribute[];
}

const initialState: CalculatorState = {
    showInfo: false,
    race: {},
    class: {},
    background: {},
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
        selectField(state, action: PayloadAction<{field: string, item: object}>) {
            state[action.payload.field] = action.payload.item;
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
