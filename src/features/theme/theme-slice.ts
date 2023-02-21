import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeType = 'light' | 'dark'

const initialState: ThemeType = 'light'

const themeSlice = createSlice({
  name: '@@theme',
  initialState: (): ThemeType => initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<ThemeType>) => action.payload,
  },
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
