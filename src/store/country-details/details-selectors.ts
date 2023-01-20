import {RootAppType} from "../store";
import {DetailsType} from "./details-reducer";

export const selectDetails = (state: RootAppType): DetailsType => {
    return state.details
}