import {AppThunkType} from "../store";
import {DetailsResponseType} from "./details-reducer";

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

export const setDetailsThunk = (name: string): AppThunkType => (dispatch, _, {client, api}) => {
    dispatch(setLoadingAC());
    client.get(api.searchByCountry(name)).then((response) => {
        dispatch(setDetailsAC(response.data[0]))
    }).catch((error) => {
        dispatch(setErrorAC(error.message))
    })

}

export const setNeighborsThunk = (neighbors: string[]): AppThunkType => (dispatch, _, {client, api}) => {
    client.get(api.filterByCode(neighbors)).then((response) => {
        dispatch(setNeighborsAC(response.data.map((c: { name: string }) => c.name)))
    }).catch((error) => {
        dispatch(setErrorAC(error.message))
    })
}

export type AllDetailsTypes =
    ReturnType<typeof setDetailsAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof clearDetailsAC>
    | ReturnType<typeof setNeighborsAC>