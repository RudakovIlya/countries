import {useNavigate} from 'react-router-dom';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {useEffect} from "react";
import {loadCountries} from "../store/countries/countriesActions";
import {selectAllCountries, selectCountriesInfo} from "../store/countries/countriesSelectors";

type TCountryInfo = {
    img: string
    name: string
    info: { title: string, description: string }[]
}

export const HomePage = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const countries = useAppSelector(state => selectAllCountries(state, state.controls.search, state.controls.region));

    const {qty, status, error} = useAppSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries())
        }
    }, [dispatch, qty])

    return (
        <>
            <Controls/>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo: TCountryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };
                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    );
};
