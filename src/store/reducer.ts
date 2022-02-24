import {combineReducers} from "@reduxjs/toolkit";
import {sortObjKeysAlphabetically} from "../utils/sort-object-keys";

import {calculatorReducer} from "./slices/calculator-slice";
import {serviceReducer} from "./slices/service-slice";

const reducers = {calculatorReducer, serviceReducer};

const sortedReducers = sortObjKeysAlphabetically(reducers);

export const rootReducer = combineReducers(
    sortedReducers
);

export type RootState = ReturnType<typeof rootReducer>;
