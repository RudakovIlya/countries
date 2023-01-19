import {RootAppType} from "../store";

export const selectSearch = (state: RootAppType) => {
    return state.controls.search
};