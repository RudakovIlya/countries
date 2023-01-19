import {AppThunkType} from "../store";
import {APIResponseType} from "./countriesReducer";

export const setCountriesAC = (countries: APIResponseType[]) => {
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

export const loadCountries = (): AppThunkType => (dispatch, _, {client, api}) => {
    dispatch(setLoadingsAC()) // Запускаем загрузку.

    client.get(api.ALL_COUNTRIES)
        .then((response: any) => {
            dispatch(setCountriesAC(response.data))
        })
        .catch((error) => {
            dispatch(setErrorAC(error.message))
        })
}

export type AllCountriesType = ReturnType<typeof setCountriesAC>
    | ReturnType<typeof setLoadingsAC>
    | ReturnType<typeof setErrorAC>