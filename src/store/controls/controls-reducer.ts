import {AllControlsType} from "./controls-actions";

export type ControlsType = {
    search: string,
    region: string
}

const initialState: ControlsType = {
    search: '',
    region: ''
}

export const controlsReducer = (state: ControlsType = initialState, action: AllControlsType): ControlsType => {
    switch (action.type) {
        case "@@controls/SET_SEARCH": {
            return {
                ...state,
                search: action.payload
            }
        }
        case "@@controls/SET_REGION": {
            return {
                ...state,
                region: action.payload
            }
        }
        default: {
            return state
        }
    }
}