import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { clearDetails, loadCountryByName, selectDetails } from './details-slice'
import { useEffect } from 'react'

export const useDetails = (name: string = '') => {
  const dispatch = useAppDispatch()

  const { details, error, status } = useAppSelector(selectDetails)

  useEffect(() => {
    dispatch(loadCountryByName(name as string))
    return () => {
      dispatch(clearDetails())
    }
  }, [dispatch, name])

  return {
    details: { details, error, status },
  }
}
