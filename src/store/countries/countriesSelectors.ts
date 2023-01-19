import {RootAppType} from "../store";

export const selectCountriesInfo = (state: RootAppType) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})

export const selectAllCountries = (state: RootAppType, search: string, region: string) => {
    return state.countries.list.filter(countrie => {
        return countrie.name.toLowerCase().includes(search.toLowerCase()) && countrie.region.toLowerCase().includes(region.toLowerCase())
    })
}