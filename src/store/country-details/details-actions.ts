import {DetailsResponseType} from "./details-reducer";
import {Dispatch} from "@reduxjs/toolkit";

const setDetailsAC = (details: DetailsResponseType) => {
    return {
        type: '@@details/SET_DETAILS',
        payload: details
    } as const
};

const setLoadingAC = () => {
    return {
        type: '@@details/SET_LOADING',
    } as const
}

const setErrorAC = (error: string) => {
    return {
        type: '@@details/SET_ERROR',
        payload: error
    } as const
}

export const clearDetailsAC = () => {
    return {
        type: '@@details/CLEAR_DETAILS',
    } as const
}

const setNeighborsAC = (neighbors: string[]) => {
    return {
        type: '@@details/SET_NEIGHBORS',
        payload: neighbors
    } as const
}

export const setDetailsThunk = (name: string): any => (dispatch: Dispatch, _: any, {client, api}: any) => {
    dispatch(setLoadingAC());
    client.get(api.searchByCountry(name)).then((response: any) => {
        dispatch(setDetailsAC(response.data[0]))
    }).catch((error: any) => {
        dispatch(setErrorAC(error.message))
    })

}

export const setNeighborsThunk = (neighbors: string[]): any => (dispatch: Dispatch, _: any, {client, api}: any) => {
    client.get(api.filterByCode(neighbors)).then((response: any) => {
        dispatch(setNeighborsAC(response.data.map((c: { name: string }) => c.name)))
    }).catch((error: any) => {
        dispatch(setErrorAC(error.message))
    })
}

export type AllDetailsTypes =
    ReturnType<typeof setDetailsAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof clearDetailsAC>
    | ReturnType<typeof setNeighborsAC>