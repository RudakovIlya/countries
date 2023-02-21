import { Controls } from '../features/controls/Controls'
import { CountryList } from '../features/countries/CountryList'
import { memo } from 'react'

export const HomePage = memo(() => {
  return (
    <>
      <Controls />
      <CountryList />
    </>
  )
})
