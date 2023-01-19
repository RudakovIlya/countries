import {RootAppType} from "../store";

export const selectSearch = (state: RootAppType) => {
    return state.controls.search
};

export const selectRegion = (state: RootAppType): string => {
    return state.controls.region
};

export const selectControls = (state: RootAppType) => {
    return state.controls
};


