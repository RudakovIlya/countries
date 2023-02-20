import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectRegion, setRegion} from "./controls-slice";

export const useRegion = () => {
    const dispatch = useAppDispatch();

    const region = useAppSelector(selectRegion);

    const handleSelect = (region: any) => {
        dispatch(setRegion(region?.value || ''))
    }
    return {
        region,
        handleSelect
    }
}