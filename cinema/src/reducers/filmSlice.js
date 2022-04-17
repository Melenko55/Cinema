import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
    name: "film",
    initialState: {
        films: [],
        film: {},
        isLoading: false,
        error: null,
    },
    reducers: {
        getFilms: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        getFilmsSuccess: (state, action) => {
            state.films = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getFilmsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { getFilms, getFilmsSuccess, getFilmsFailure } = filmSlice.actions;

export default filmSlice.reducer;