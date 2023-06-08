/** @format */

import counterReducer from "../feature/Counter/CounterSlice";
import userReducer from "../feature/Auth/userSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  count: counterReducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
