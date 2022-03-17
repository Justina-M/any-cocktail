import { createSlice } from "@reduxjs/toolkit";

const initUiState = {
  status: null, // 'loading' OR 'success' OR 'error'
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initUiState,
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message || "";
    },
  },
});

export const { updateStatus } = uiSlice.actions;

export default uiSlice.reducer;
