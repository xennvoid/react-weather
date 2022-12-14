import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import api from "../../axios";
import { Weather } from "../types/weather";

interface InitialState {
    loading: boolean;
    error: string | null;
    daysCount: number;
    data: Weather | null;
    query: string;
    activeFilter: number;
}

const initialState: InitialState = {
    loading: false,
    error: null,
    daysCount: 7,
    data: null,
    query: 'London',
    activeFilter: 0
}

export const getWeekWeather = createAsyncThunk<Weather, undefined, { rejectValue: any, state: RootState }>('week/getWeather',
    async (_, thunkAPI) => {
        try {
            const daysCount = thunkAPI.getState().week.daysCount;
            const query = thunkAPI.getState().week.query;

            const response = await api.get(`/forecast?q=${query}&cnt=${daysCount}`)

            if (response.status !== 200)
                throw thunkAPI.rejectWithValue("SERVER ERROR")

            return await response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("REQUEST DATA ERROR")
        }
    })

const weatherWeekSlice = createSlice({
    name: 'week',
    initialState,
    reducers: {
        changeDaysCount: (state, action: PayloadAction<number>) => {
            state.daysCount = action.payload;
        },
        changeCityName: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        changeActiveFilter: (state, action: PayloadAction<number>) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWeekWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        builder.addCase(getWeekWeather.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(getWeekWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { changeDaysCount, changeCityName, changeActiveFilter } = weatherWeekSlice.actions;
export const weatherWeekReducer = weatherWeekSlice.reducer;