import { useAppDispatch } from '../../app/hooks'
import { clearControls } from './controls-slice'

export const useCleanup = () => {
  const dispatch = useAppDispatch()

  const clearControlsHandler = () => {
    dispatch(clearControls())
  }
  return {
    clearControlsHandler,
  }
}
