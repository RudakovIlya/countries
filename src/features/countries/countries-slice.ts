import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {IExtraType, RootState} from "../../app/store";

export type StatusType = 'loading' | 'received' | 'rejected' | 'idle'

export interface APIResponseType {
    flags: {
        svg: string
        png: string
    }
    name: string
    population: number
    region: string
    capital: string
}

interface CountriesType {
    status: StatusType
    error: string | null
    list: APIResponseType[]
}

const initialState: CountriesType = {
    status: 'idle',
    error: null,
    list: []
}

export const loadCountries = createAsyncThunk<APIResponseType[], void, {
    extra: IExtraType,
    rejectValue: string | null,
    SerializedError: string | null
}>('@@countries/load-countries', async (_, {extra: {client, api}, rejectWithValue}) => {
    try {
        const response = await client.get(api.ALL_COUNTRIES);

        return response.data
    } catch (error) {
        const errors = error as Error | AxiosError<{ message: string | null }>
        if (!axios.isAxiosError(error)) {
            rejectWithValue(error as string)
        } else {
            console.log(errors.message)
            rejectWithValue(errors.message)
        }
    }
})

export const countriesSlice = createSlice({
    name: '@@countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected'
                if (action.payload) {
                    state.error = action.payload
                }
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status = 'received'
                state.list = action.payload
            })
    }
})

export const selectCountriesInfo = (state: RootState) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})

export const selectAllCountries = (state: RootState, search: string, region: string) => {
    return state.countries.list.filter(countrie => {
        return countrie.name.toLowerCase().includes(search.toLowerCase()) && countrie.region.toLowerCase().includes(region.toLowerCase())
    })
}

export const countryReducer = countriesSlice.reducer