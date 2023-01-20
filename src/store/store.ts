import axios from 'axios'
import * as api from '../config'
import {compose, createStore, applyMiddleware} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {rootReducer, TRootReducer} from "./rootReducer";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {ThemeActionsType} from "./theme/themeActions";
import {AllActionsType} from "./allActionsType";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistConfig = {
    key: 'theme',
    storage,
    whitelist: ['theme']
}

const persistedReducer = persistReducer<TRootReducer, ThemeActionsType>(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument({
    client: axios,
    api
}))));

export const persistor = persistStore(store);

export type RootAppType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type ExtraType = {
    client: typeof axios
    api: typeof api
}

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootAppType, ExtraType, AllActionsType>

