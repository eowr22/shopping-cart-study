import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInfo = createAsyncThunk(
  "info/fetchInfo",
  async (dispatch, getState) => {
    return await fetch(
      "https://us-central1-react-baemin.cloudfunctions.net/merchantInfo"
    ).then((res) => res.json());
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState: {
    info: {},
    status: null,
  },
  extraReducers: {
    [fetchInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchInfo.fulfilled]: (state, action) => {
      state.status = "success";
      state.info = action.payload;
    },
    [fetchInfo.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default infoSlice.reducer;
