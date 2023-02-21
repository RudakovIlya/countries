import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useEffect } from 'react'
import {
  loadCountries,
  selectAllCountries,
  selectCountriesInfo,
} from './countries-slice'

export const useCountries = () => {
  const dispatch = useAppDispatch()

  const countries = useAppSelector((state) =>
    selectAllCountries(state, state.controls.search, state.controls.region)
  )

  const { qty, status, error } = useAppSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries())
    }
  }, [dispatch, qty])

  return {
    countries,
    info: { status, error },
  }
}
