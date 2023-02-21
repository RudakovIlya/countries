import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectSearch, setSearch } from './controls-slice'
import { ChangeEvent } from 'react'

export const useSearch = () => {
  const dispatch = useAppDispatch()

  const search = useAppSelector(selectSearch)

  const setSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.currentTarget.value))
  }
  return {
    search,
    setSearchHandler,
  }
}
