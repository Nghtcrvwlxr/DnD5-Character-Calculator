import {combineReducers} from "@reduxjs/toolkit";
import {sortObjKeysAlphabetically} from "../utils/sort-object-keys";
import {calculatorReducer} from "./slices/calculator-slice";

const reducers = {calculatorReducer};

const sortedReducers = sortObjKeysAlphabetically(reducers);

export const rootReducer = combineReducers(
    sortedReducers
);

export type RootState = ReturnType<typeof rootReducer>;
