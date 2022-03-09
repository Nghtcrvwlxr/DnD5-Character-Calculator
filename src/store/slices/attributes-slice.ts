import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Attribute} from "../../utils/types";

interface AttributesState {
    initialData: Attribute[];
    initialRemainingPoints: number;
    data: Attribute[];
    level: number;
    remainingPoints: number;
    currentField: string;
}

const initialState: AttributesState = {
    initialData: [],
    initialRemainingPoints: 27,
    data: [],
    level: 1,
    remainingPoints: 27,
    currentField: '',
};

const attributesSlice = createSlice({
    name: 'attributesReducer',
    initialState,
    reducers: {
        loadData(state, action: PayloadAction<Attribute[]>) {
            state.data = action.payload;
            state.initialData = action.payload;
            state.level = 1;
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
        calculateRemainingPoints(state) {
            const bonusPoints = (Math.floor(state.level / 4) * 2);
            state.remainingPoints = state.initialRemainingPoints + bonusPoints;
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
            if (state.remainingPoints && state.data[index].value < 15) {
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
        }
    }
});

export const {reducer: attributesReducer} = attributesSlice;

export const {
    loadData,
    toggleLevel,
    calculateRemainingPoints,
    calculateBonusPoints,
    addAttribute,
    removeAttribute,
    selectField
} = attributesSlice.actions;