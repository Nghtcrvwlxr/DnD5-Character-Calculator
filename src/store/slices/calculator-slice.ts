import {createSlice} from "@reduxjs/toolkit";

interface CalculatorState {}

const initialState: CalculatorState = {};

const calculatorSlice = createSlice({
    name: 'calculatorReducer',
    initialState,
    reducers: {}
});

export const {reducer: calculatorReducer} = calculatorSlice;
