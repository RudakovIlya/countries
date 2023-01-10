import styled from 'styled-components';

import {IoSearch} from 'react-icons/io5';
import {FC} from "react";

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

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

type SearchPropsType = {
    search: string
    setSearch: (search: string) => void
}

export const Search: FC<SearchPropsType> = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    );
};
