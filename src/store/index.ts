import { configureStore } from "@reduxjs/toolkit";
import { weatherWeekReducer } from "./slices/weatherWeekSlice";

export const store = configureStore({
    reducer: {
        week: weatherWeekReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch