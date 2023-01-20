import {AppThunkType} from "../store";

export const setSearchAC = (search: string) => {
    return {
        type: '@@controls/SET_SEARCH',
        payload: search
    } as const
}

export const setRegionAC = (region: string) => {
    return {
        type: '@@controls/SET_REGION',
        payload: region
    } as const
}

export const clearControlsAC = () => {
    return {
        type: '@@controls/CLEAR_CONTROLS'
    } as const
}

export const searchThunk = (value: string): AppThunkType => (dispatch) => {
    dispatch(setSearchAC(value))
}

export type AllControlsType = ReturnType<typeof setSearchAC> | ReturnType<typeof setRegionAC> | ReturnType<typeof clearControlsAC>