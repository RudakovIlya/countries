import axios from 'axios'
import * as api from '../config'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { themeReducer } from '../features/theme/theme-slice'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { controlsReducer } from '../features/controls/controls-slice'
import { countryReducer } from '../features/countries/countries-slice'
import { detailsReducer } from '../features/details/details-slice'

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
}

const rootReducer = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countryReducer,
  details: detailsReducer,
})

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: {
        ignoredActions: [FLUSH, PERSIST, PURGE, REHYDRATE, PAUSE, REGISTER],
        ignoreActions: false,
      },
    }),
})

export interface IExtraType {
  client: typeof axios
  api: typeof api
}

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
