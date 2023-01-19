import styled from 'styled-components';
import {Search} from './Search';
import {CustomSelect} from './CustomSelect';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {selectRegion} from "../store/controls/controls-selectors";
import { setRegionAC} from "../store/controls/controls-actions";

type OptionsMapValuesType = {
    value: string
    label: string
}

type OptionsMapType = {
    [K in string]: OptionsMapValuesType
}

const optionsMap: OptionsMapType = {
    'Africa': {value: 'Africa', label: 'Africa'},
    'America': {value: 'America', label: 'America'},
    'Asia': {value: 'Asia', label: 'Asia'},
    'Europe': {value: 'Europe', label: 'Europe'},
    'Oceania': {value: 'Oceania', label: 'Oceania'},
}

const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {

    const dispatch = useAppDispatch();

    const region = useAppSelector(selectRegion);

    const handleSelect = (region: any) => {
        dispatch(setRegionAC(region?.value || ''))
    }

    return (
        <Wrapper>
            <Search/>
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                defaultValue={''}
                isSearchable={false}
                value={optionsMap[region]}
                onChange={handleSelect}
            />
        </Wrapper>
    );
};
