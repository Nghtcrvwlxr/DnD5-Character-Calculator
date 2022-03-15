import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Language, Skill, Tool} from "../../utils/types";

interface ProficienciesState extends Record<string, any> {
    skills: {
        loading: boolean;
        error: boolean | null;
        data: Skill[];
    };
    tools: {
        loading: boolean;
        error: boolean | null;
        data: Tool[];
    };
    languages: {
        loading: boolean;
        error: boolean | null;
        data: Language[];
    };
}

const initialState: ProficienciesState = {
    skills: {
        loading: true,
        error: null,
        data: [],
    },
    tools: {
        loading: true,
        error: null,
        data: [],
    },
    languages: {
        loading: true,
        error: null,
        data: [],
    },
};

const proficienciesSlice = createSlice({
    name: 'proficienciesReducer',
    initialState,
    reducers: {
        proficienciesRequested(state, action: PayloadAction<string>) {
            state[action.payload] = initialState[action.payload];
        },
        proficienciesLoaded(state, action: PayloadAction<{field: string, data: object}>) {
            state[action.payload.field].loading = false;
            state[action.payload.field].data = action.payload.data;
        },
        proficienciesError(state, action: PayloadAction<string>) {
            state[action.payload].loading = false;
            state[action.payload].error = true;
            state[action.payload].data = [];
        },
    }
});

export const {reducer: proficienciesReducer} = proficienciesSlice;

export const {
    proficienciesRequested,
    proficienciesLoaded,
    proficienciesError,
} = proficienciesSlice.actions;
