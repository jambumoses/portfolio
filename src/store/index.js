import { configureStore } from "@reduxjs/toolkit";
import constantSlice from "./constantSlice";


const store = configureStore({
    reducer: {
        constant : constantSlice.reducer,
    },
});

export default store;