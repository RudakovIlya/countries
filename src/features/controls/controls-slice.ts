import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IControlsType } from './types'

const initialState: IControlsType = {
  search: '',
  region: '',
}

export const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload
    },
    clearControls: () => initialState,
  },
})

export const selectSearch = (state: RootState) => {
  return state.controls.search
}

export const selectRegion = (state: RootState): string => {
  return state.controls.region
}

export const selectControls = (state: RootState) => {
  return state.controls
}

export const controlsReducer = controlsSlice.reducer
export const { setSearch, clearControls, setRegion } = controlsSlice.actions
