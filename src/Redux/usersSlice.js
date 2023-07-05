import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUsers(state, action) {
      state.addedUsers.push(action.payload);
    },
  },
});

export const selectAllUsers = (state) => state.users.addedMovies;
export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
