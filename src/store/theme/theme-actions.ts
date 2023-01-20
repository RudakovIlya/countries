import {ThemeType} from "./theme-reducer";

export const toggleThemeAC = (theme: ThemeType) => {
    return {
        type: '@@theme/TOGGLE-THEME',
        payload: theme
    } as const
};

export type ThemeActionsType = ReturnType<typeof toggleThemeAC>