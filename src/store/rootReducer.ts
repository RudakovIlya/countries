import {combineReducers} from "redux";
import {themeReducer} from "./theme/themeReducer";
import {countriesReducer} from "./countries/countriesReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer
});

export type TRootReducer = ReturnType<typeof rootReducer>