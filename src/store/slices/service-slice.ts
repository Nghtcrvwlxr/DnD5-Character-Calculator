import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Background, Class, Race } from "../../utils/types";

interface ServiceState {
  data: Race[] | Class[] | Background[];
  loading: boolean;
  error: boolean | null;
}

const initialState: ServiceState = {
  data: [],
  loading: true,
  error: null,
};

const serviceSlice = createSlice({
  name: "serviceReducer",
  initialState,
  reducers: {
    dataRequested() {
      return initialState;
    },
    dataLoaded(state, action: PayloadAction<Race[] | Class[] | Background[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    dataError(state) {
      state.loading = false;
      state.data = [];
      state.error = true;
    },
  },
});

export const { reducer: serviceReducer } = serviceSlice;

export const { dataRequested, dataLoaded, dataError } = serviceSlice.actions;
