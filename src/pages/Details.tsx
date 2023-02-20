import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';

import {Button} from '../components/Button';
import {Info} from '../components/Info';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {clearDetailsAC, setDetailsThunk} from "../store/country-details/details-actions";
import {selectDetails} from "../store/country-details/details-selectors";

export const Details = () => {

    const dispatch = useAppDispatch();

    const {name} = useParams();

    const navigate = useNavigate();

    const {details, error} = useAppSelector(selectDetails);

    useEffect(() => {
        dispatch(setDetailsThunk(name as string))
        return () => {
            dispatch(clearDetailsAC());
        }
    }, [dispatch, name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {error && <h1>{error}</h1>}
            {details && <Info push={navigate} {...details} />}
        </div>
    );
};
