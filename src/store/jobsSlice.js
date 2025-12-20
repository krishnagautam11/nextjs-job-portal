import { createSlice } from "@reduxjs/toolkit";
import { jobs } from "../data/jobs";

const initialState = {
  jobs,
  search: "",
  savedJobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },

    saveJob(state, action) {
      const exists = state.savedJobs.find(
        (job) => job.id === action.payload.id
      );
      if (!exists) {
        state.savedJobs.push(action.payload);
      }
    },

    removeSavedJob(state, action) {
      state.savedJobs = state.savedJobs.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});

export const { setSearch, saveJob, removeSavedJob } = jobsSlice.actions;
export default jobsSlice.reducer;
