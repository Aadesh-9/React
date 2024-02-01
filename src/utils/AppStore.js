import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const AppStore = configureStore({
  // this is whole big reducer which is our app store , it contains reducers for each slice like cartReducer,userReducer
  reducer: {
    cart: cartReducer,
  },
});

export default AppStore;
