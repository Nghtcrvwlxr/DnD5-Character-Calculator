import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    showInfo: boolean;
    race: string;
}

const initialState: CalculatorState = {
    showInfo: false,
    race: '',
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
    }
});

export const {reducer: calculatorReducer} = calculatorSlice;

export const {hideInformation, selectRace, clearRace} = calculatorSlice.actions;
