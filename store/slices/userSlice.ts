import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const employeesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: {}, action: PayloadAction<string>) => {
      return state;
    },
  },
});

export const { addUser } = employeesSlice.actions;
