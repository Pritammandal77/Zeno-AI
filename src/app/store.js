import { configureStore } from "@reduxjs/toolkit";
import { modeSlice } from "../features/Mode/ModeSlice";
import { APISlice } from "../features/APIData/APISlice";


const store = configureStore({
    reducer: {
        mode : modeSlice.reducer,
        APIData : APISlice.reducer
    }
})

export default store;