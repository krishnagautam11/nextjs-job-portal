import { createSlice } from "@reduxjs/toolkit";
import { jobs } from "../data/jobs";

const initialState = {
  jobs,
  search: "",
  location: "",
  jobType: "",
  savedJobs: [],
  currentPage: 1,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.currentPage = 1; // reset page when filters change
    },

    setLocation(state, action) {
      state.location = action.payload;
      state.currentPage = 1;
    },

    setJobType(state, action) {
      state.jobType = action.payload;
      state.currentPage = 1;
    },

    setPage(state, action) {
      state.currentPage = action.payload;
    },

    clearFilters(state) {
      state.search = "";
      state.location = "";
      state.jobType = "";
      state.currentPage = 1;
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

export const {
  setSearch,
  setLocation,
  setJobType,
  setPage,
  clearFilters,
  saveJob,
  removeSavedJob,
} = jobsSlice.actions;

export default jobsSlice.reducer;
