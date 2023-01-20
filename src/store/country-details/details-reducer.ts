import {AllDetailsTypes} from "./details-actions";
import {StatusType} from "../countries/countries-reducer";

type CurrenciesType = {
    code: string
    name: string
    symbol: string
}

type LanguagesType = {
    [key: string]: string
}

type Languages2Type = {
    [key: string]: string
}

type MainLanguagesType = { name: string, nativeName: string } & LanguagesType & Languages2Type

export type DetailsResponseType = {
    name: string
    nativeName: string
    flag: string
    region: string
    capital: string
    population: number
    subregion: string
    topLevelDomain: string[]
    currencies: CurrenciesType[]
    languages: MainLanguagesType[]
    borders: string[]
}

export type DetailsType = {
    status: StatusType
    error: string | null
    details: DetailsResponseType,
    neighbors: string[]
}

const initialState: DetailsType = {
    details: {} as DetailsResponseType,
    error: null,
    status: 'idle',
    neighbors: []
}

export const detailsReducer = (state: DetailsType = initialState, action: AllDetailsTypes): DetailsType => {
    switch (action.type) {
        case "@@details/SET_LOADING": {
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        }
        case "@@details/SET_DETAILS": {
            return {
                ...state,
                status: 'received',
                details: action.payload
            }
        }
        case "@@details/SET_ERROR": {
            return {
                ...state,
                status: 'received',
                error: action.payload
            }
        }
        case "@@details/CLEAR_DETAILS": {
            return {
                ...state,
                details: {} as DetailsResponseType
            }
        }
        case "@@details/SET_NEIGHBORS": {
            return {
                ...state,
                neighbors: action.payload
            }
        }
        default: {
            return state
        }
    }
}