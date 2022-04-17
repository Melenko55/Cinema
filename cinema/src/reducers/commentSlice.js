import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name: "comment",
    initialState: {
        comments: [],
        isLoading: false,
        error: null,
    },

    reducers: {
        getComments: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        getCommentsSuccess: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getCommentsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { getComments, getCommentsSuccess, getCommentsFailure } = commentSlice.actions;
export default commentSlice.reducer;
