import { createSlice } from "@reduxjs/toolkit";

export interface JobsSliceProps {
  isLoadingJobs: boolean;
  jobs: never[];
  job: null;
}
const initialState : JobsSliceProps = {
  isLoadingJobs: true,
  jobs: [],
  job: null,
};

export const JobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    onLoadJobs: (state, { payload = [] }) => {
      state.isLoadingJobs = false;
      state.jobs = payload;
      state.job = null;
    },
    onSearchJobById: (state, { payload }) => {
      state.job = payload;
    },
    onLogoutJobs: (state) => {
      state.isLoadingJobs = true;
      state.jobs = [];
      state.job = null;
    },
  },
});

export const { onLoadJobs, onSearchJobById, onLogoutJobs } = JobsSlice.actions;
