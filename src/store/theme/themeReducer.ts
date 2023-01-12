import {ThemeActionsType} from "./themeActions";

export type ThemeType = 'light' | 'dark'

export const themeReducer = (state: ThemeType = 'light', action: ThemeActionsType): ThemeType => {
    switch (action.type) {
        case "@@theme/TOGGLE-THEME": {
            return action.payload
        }
        default: {
            return state
        }
    }
}