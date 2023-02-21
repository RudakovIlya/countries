import { Info } from './Info'
import { useDetails } from './use-details'
import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'

interface ICountryDetails {
  navigate: (to: string) => void
}

export const CountryDetails: FC<ICountryDetails> = memo(({ navigate }) => {
  const { name } = useParams<{ name: string }>()

  const {
    details: { details, error },
  } = useDetails(name)

  return (
    <>
      {error && <h1>{error}</h1>}
      {details && <Info push={navigate} {...details} />}
    </>
  )
})
