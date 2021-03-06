import {combineReducers} from "@reduxjs/toolkit";
import {sortObjKeysAlphabetically} from "../utils/sort-object-keys";

import {calculatorReducer} from "./slices/calculator-slice";
import {serviceReducer} from "./slices/service-slice";
import {navigationReducer} from "./slices/navigation-slice";
import {attributesReducer} from "./slices/attributes-slice";
import {proficienciesReducer} from "./slices/proficiencies-slice";

const reducers = {calculatorReducer, serviceReducer, navigationReducer, attributesReducer, proficienciesReducer};

const sortedReducers = sortObjKeysAlphabetically(reducers);

export const rootReducer = combineReducers(
    sortedReducers
);

export type RootState = ReturnType<typeof rootReducer>;
