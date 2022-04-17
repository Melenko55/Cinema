import { createSlice } from "@reduxjs/toolkit";

export const scheduleSlice = createSlice({
    name: "schedule",
    initialState: {
        schedule: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        getSchedule: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        getScheduleSuccess: (state, action) => {
            state.schedule = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getScheduleFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { getSchedule, getScheduleSuccess, getScheduleFailure } = scheduleSlice.actions;
export default scheduleSlice.reducer;