import {DetailsType} from "./details-reducer";
import {RootState} from "../../app/store";

export const selectDetails = (state: RootState): DetailsType => {
    return state.details
}