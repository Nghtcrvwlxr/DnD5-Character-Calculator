import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Attribute} from "../../utils/types";

interface AttributesState {
    loading: boolean,
    error: boolean | null,
    initialData: Attribute[];
    initialRemainingPoints: number;
    data: Attribute[];
    level: number;
    remainingPoints: number;
    currentField: string;
}

const initialState: AttributesState = {
    loading: true,
    error: null,
    initialData: [],
    initialRemainingPoints: 27,
    data: [],
    remainingPoints: 0,
    level: 1,
    currentField: '',
};

const attributesSlice = createSlice({
    name: 'attributesReducer',
    initialState,
    reducers: {
        attributesRequested(state) {
            return state = initialState;
        },
        attributesLoaded(state, action: PayloadAction<Attribute[]>) {
            state.loading = false;
            state.initialData = action.payload;
            state.data = action.payload;
            state.level = 1;
        },
        attributesError(state) {
            state.data = [];
            state.loading = false;
            state.error = true;
        },
        toggleLevel(state, action: PayloadAction<string>) {
            if (action.payload === 'inc' && state.level < 20) {
                state.level++;
                state.data = state.initialData;
            } else if (action.payload === 'dec' && state.level > 1) {
                state.level--;
                state.data = state.initialData;
            }
        },
        calculateRemainingPoints(state, action) {
            const additionalPoints = 2;
            let levels: number[] = [];
            if(action.payload.index === 'fighter') {
                levels = [4, 6, 8, 12, 14, 16, 19];
            } else {
                levels = [4, 8, 12, 16, 19];
            }
            const multiplier = levels.filter(level => state.level >= level).length;
            state.remainingPoints = state.initialRemainingPoints + (additionalPoints * multiplier);
        },
        calculateBonusPoints(state, action) {
            state.data.forEach(attr => {
                for (let key in action.payload.bonusStats) {
                    if (key === attr.index) {
                        attr.value += action.payload.bonusStats[key];
                    }
                }
                attr.modifier = Math.floor((attr.value / 2) - 5);
            });
            for (let key in action.payload.bonusStats) {
                if (key === 'unset') {
                    state.remainingPoints += action.payload.bonusStats[key];
                }
            }
            state.initialData = state.data;
            state.initialRemainingPoints = state.remainingPoints;
        },
        addAttribute(state, action: PayloadAction<string>) {
            const index = state.data.findIndex(item => item.index === action.payload);
            const pointCost = Math.floor((state.data[index].value + 1) / 7);
            if (state.remainingPoints >= pointCost && state.data[index].value < 15) {
                state.data[index].value = state.data[index].value + 1;
                state.remainingPoints = state.remainingPoints - pointCost;
                state.data[index].modifier = Math.floor((state.data[index].value / 2) - 5);
            }
        },
        removeAttribute(state, action: PayloadAction<string>) {
            const index = state.data.findIndex(item => item.index === action.payload);
            const pointCost = Math.floor((state.data[index].value) / 7);
            if (state.data[index].value > state.initialData[index].value) {
                state.data[index].value = state.data[index].value - 1;
                state.remainingPoints = state.remainingPoints + pointCost;
                state.data[index].modifier = Math.floor((state.data[index].value / 2) - 5);
            }
        },
        selectField(state, action: PayloadAction<string>) {
            state.currentField = action.payload;
        },
        clearAttributes(state) {
            return state = initialState;
        },
    }
});

export const {reducer: attributesReducer} = attributesSlice;

export const {
    attributesRequested,
    attributesLoaded,
    attributesError,
    toggleLevel,
    calculateRemainingPoints,
    calculateBonusPoints,
    addAttribute,
    removeAttribute,
    selectField,
    clearAttributes
} = attributesSlice.actions;
