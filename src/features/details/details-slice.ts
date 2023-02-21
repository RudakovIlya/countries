import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IExtraType, RootState } from '../../app/store'
import { DetailsResponseType, DetailsType } from './types'
import axios, { AxiosError } from 'axios'

interface ThunkApiConfig {
  extra: IExtraType
  rejectValue: string | null
  SerializedError: string | null
}

export const loadCountryByName = createAsyncThunk<
  DetailsResponseType,
  string,
  ThunkApiConfig
>(
  '@@details/load-by-name',
  async (name, { extra: { client, api }, rejectWithValue }) => {
    try {
      const response = await client.get(api.searchByCountry(name))
      return response.data[0]
    } catch (error) {
      const errorMessage = error as
        | Error
        | AxiosError<{ message: string | null }>
      if (!axios.isAxiosError(error)) {
        console.log(error)
        return rejectWithValue(error as string)
      } else {
        return rejectWithValue(errorMessage.message)
      }
    }
  }
)

export const loadNeighbors = createAsyncThunk<
  string[],
  string[],
  ThunkApiConfig
>(
  '@@details/load-neighbors',
  async (neighbors, { extra: { client, api }, rejectWithValue }) => {
    try {
      const response = await client.get(api.filterByCode(neighbors))
      return response.data.map((c: { name: string }) => c.name)
    } catch (error) {
      const errorMessage = error as
        | Error
        | AxiosError<{ message: string | null }>
      if (!axios.isAxiosError(error)) {
        return rejectWithValue(error as string)
      } else {
        return rejectWithValue(errorMessage.message)
      }
    }
  }
)

const initialState: DetailsType = {
  details: {} as DetailsResponseType,
  neighbors: [],
  error: null,
  status: 'idle',
}

export const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.details = action.payload
      })

      .addCase(loadNeighbors.fulfilled, (state, action) => {
        state.neighbors = action.payload
      })
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.status = 'received'
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading'
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'rejected'
          state.error = action.payload
        }
      )
  },
})

export const selectDetails = (state: RootState): DetailsType => {
  return state.details
}

export const detailsReducer = detailsSlice.reducer
export const { clearDetails } = detailsSlice.actions
