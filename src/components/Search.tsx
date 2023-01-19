import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';
import {ChangeEvent, memo} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../store/hooks/hooks";
import {selectSearch} from "../store/controls/controls-selectors";
import {setSearchAC} from "../store/controls/controls-actions";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = memo(styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`);


export const Search = () => {

    const dispatch = useDispatch();

    const search = useAppSelector(selectSearch);

    const setSearch = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchAC(event.currentTarget.value))
    }

    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={setSearch} value={search}/>
        </InputContainer>
    );
};
