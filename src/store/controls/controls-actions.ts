export const setSearchAC = (search: string) => {
    return {
        type: '@@controls/SET_SEARCH',
        payload: search
    } as const
}

export type AllControlsType = ReturnType<typeof setSearchAC>