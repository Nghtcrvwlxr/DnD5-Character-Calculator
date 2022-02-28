import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    showInfo: boolean;
    race: string;
    class: string;
}

const initialState: CalculatorState = {
    showInfo: false,
    race: '',
    class: '',
};

const calculatorSlice = createSlice({
    name: 'calculatorReducer',
    initialState,
    reducers: {
        hideInformation(state) {
            state.showInfo = false;
        },
        selectRace(state, action: PayloadAction<string>) {
            state.race = action.payload;
            state.showInfo = true;
        },
        clearRace(state) {
            state.race = '';
        },
        selectClass(state, action: PayloadAction<string>) {
            state.class = action.payload;
            state.showInfo = true;
        },
        clearClass(state) {
            state.class = '';
        },
    }
});

export const {reducer: calculatorReducer} = calculatorSlice;

export const {hideInformation, selectRace, clearRace, selectClass, clearClass} = calculatorSlice.actions;
