import { useAppDispatch } from '../../app/hooks'
import { useEffect } from 'react'
import { loadNeighbors } from './details-slice'

export const useInfo = (borders: string[]) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighbors(borders))
    }
  }, [dispatch, borders])
}
