import { configureStore } from "@reduxjs/toolkit";
import { modeSlice } from "../features/Mode/ModeSlice";


const store = configureStore({
    reducer: {
        mode : modeSlice.reducer
    }
})

export default store;