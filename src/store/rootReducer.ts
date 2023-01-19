import {combineReducers} from "redux";
import {themeReducer} from "./theme/themeReducer";
import {countriesReducer} from "./countries/countriesReducer";
import {controlsReducer} from "./controls/controls-reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
});

export type TRootReducer = ReturnType<typeof rootReducer>