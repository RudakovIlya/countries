import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setTheme } from './theme-slice'
import { useEffect } from 'react'

export const useTheme = () => {
  const theme = useAppSelector((state) => state.theme)

  const dispatch = useAppDispatch()

  const changeTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, changeTheme }
}
