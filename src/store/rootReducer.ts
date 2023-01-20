import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme-reducer";
import {countriesReducer} from "./countries/countries-reducer";
import {controlsReducer} from "./controls/controls-reducer";
import {detailsReducer} from "./country-details/details-reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    details: detailsReducer,
    controls: controlsReducer,
    countries: countriesReducer,
});

export type TRootReducer = ReturnType<typeof rootReducer>