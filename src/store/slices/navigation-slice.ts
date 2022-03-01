import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Page {
    id: string;
    url: string,
}

interface navigationState {
    pages: Page[],
    currentPage: string,
    nextPage: string,
}

const initialState: navigationState = {
    pages: [
        {id: 'race', url: '/race-selection'},
        {id: 'class', url: '/class-selection'},
        {id: 'background', url: '/background-selection'},
        {id: 'stats', url: '/stats-selection'},
        {id: 'proficiencies', url: '/proficiencies-selection'},
        {id: 'equipment', url: '/equipment-selection'},
        {id: 'spells', url: '/spells-selection'},
        {id: 'list', url: '/character-list'},
    ],
    currentPage: '',
    nextPage: '',
};

const navigationSlice = createSlice({
    name: 'navigationReducer',
    initialState,
    reducers: {
        updateCurrentPage(state, action: PayloadAction<string>) {
            state.currentPage = action.payload;
        },
        getNextPage(state, action: PayloadAction<string>) {
            const currentIdx = state.pages.findIndex(page => page.url === action.payload);
            if (state.pages.length > currentIdx + 1) {
                state.nextPage = state.pages[currentIdx + 1].url;
            } else {
                state.nextPage = state.currentPage;
            }
        },
    }
});

export const {reducer: navigationReducer} = navigationSlice;

export const {updateCurrentPage, getNextPage} = navigationSlice.actions;
