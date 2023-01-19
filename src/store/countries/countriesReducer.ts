import {AllCountriesType} from "./countriesActions";

export type StatusType = 'loading' | 'received' | 'rejected' | 'idle'

type CountriesType = {
    status: StatusType
    error: string | null
    list: any[]
}

const initialState: CountriesType = {
    status: 'idle',
    error: null,
    list: []
}

export const countriesReducer = (state: CountriesType = initialState, action: AllCountriesType): CountriesType => {
    switch (action.type) {
        case "@@countries/SET_LOADING": {
            return {
                ...state,
                status: "loading",
                error: null
            }
        }
        case "@@countries/SET_COUNTRIES": {
            return {
                ...state,
                list: action.payload,
                status: 'received',
            }
        }
        case "@@countries/SET_ERROR": {
            return {
                ...state,
                status: 'received',
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}