import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  email: string;
  password: string;
  name: string;
  number: number;
}

const userSlice = createSlice({
  name: "user",
  reducerPath: "user",
  initialState: {} as FormData,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      return action.payload;
    },
  },
});



const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export {userReducer, userActions, userSlice}
