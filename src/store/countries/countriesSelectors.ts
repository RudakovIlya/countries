import {RootAppType} from "../store";

export const selectCountriesInfo = (state: RootAppType) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})

export const selectAllCountries = (state: RootAppType) => state.countries.list