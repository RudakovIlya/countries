import {AppDispatchType} from "../store";

export const setCountriesAC = (countries: any) => {
    return {
        type: '@@countries/SET_COUNTRIES',
        payload: countries
    } as const
}

export const setLoadingsAC = () => {
    return {
        type: '@@countries/SET_LOADING',
    } as const
}

export const setErrorAC = (error: string) => {
    return {
        type: '@@countries/SET_ERROR',
        payload: error
    } as const
}


export const loadCountries = () => (dispatch: AppDispatchType, _: unknown, {client, api}: any) => {
    dispatch(setLoadingsAC())

    client.get(api.ALL_COUNTRIES)
        .then((response: any) => {
            dispatch(setCountriesAC(response.data))
        })
}

export type AllCountriesType = ReturnType<typeof setCountriesAC>
    | ReturnType<typeof setLoadingsAC>
    | ReturnType<typeof setErrorAC>