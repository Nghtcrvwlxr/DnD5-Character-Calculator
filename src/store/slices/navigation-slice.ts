import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Page {
    url: string,
}

interface navigationState {
    pages: Page[],
    currentPage: string,
    nextPage: string,
}

const initialState: navigationState = {
    pages: [
        {url: '/race-selection'},
        {url: '/class-selection'},
        {url: '/background-selection'},
        {url: '/stats-selection'},
        {url: '/proficiencies-selection'},
        {url: '/equipment-selection'},
        {url: '/spells-selection'},
        {url: '/character-list'},
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
        getNextPage(state, action: PayloadAction<string>){
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
