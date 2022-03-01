import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    showInfo: boolean;
    race: string;
    class: string;
    background: string;
}

const initialState: CalculatorState = {
    showInfo: false,
    race: '',
    class: '',
    background: '',
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
        selectBackground(state, action: PayloadAction<string>) {
            state.background = action.payload;
            state.showInfo = true;
        },
        clearBackground(state) {
            state.background = '';
        },
    }
});

export const {reducer: calculatorReducer} = calculatorSlice;

export const {
    hideInformation,
    selectRace,
    clearRace,
    selectClass,
    clearClass,
    selectBackground,
    clearBackground} = calculatorSlice.actions;
