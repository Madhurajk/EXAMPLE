import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Redux/usersSlice";
import { rtkQueryApi } from "../API/rtkQueryApi";

const usersStore = configureStore({
  reducer: {
    users: usersReducer,
    [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryApi.middleware),
});

export default usersStore;
