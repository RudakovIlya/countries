import {memo} from "react";
import styled from "styled-components";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {useTheme} from "./use-theme";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const ThemeSwitcher = memo(() => {

    const {theme, changeTheme} = useTheme()

    return (
        <ModeSwitcher onClick={changeTheme}>
            {theme === 'light' ? (
                <IoMoonOutline size="14px"/>
            ) : (
                <IoMoon size="14px"/>
            )}{' '}
            <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
        </ModeSwitcher>
    );
});
