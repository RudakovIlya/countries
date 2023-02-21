import { List } from '../../components/List'
import { Card } from '../../components/Card'
import { useCountries } from './use-countries'
import { useNavigate } from 'react-router-dom'
import { memo, useCallback } from 'react'

interface ICountryInfo {
  img: string
  name: string
  info: { title: string; description: string }[]
}

export const CountryList = memo(() => {
  const navigate = useNavigate()
  const {
    countries,
    info: { status, error },
  } = useCountries()

  const onClickHandler = useCallback(
    (name: string) => {
      return () => navigate(name)
    },
    [navigate]
  )

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo: ICountryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            }
            return (
              <Card
                key={c.name}
                onClick={onClickHandler(`/country/${c.name}`)}
                {...countryInfo}
              />
            )
          })}
        </List>
      )}
    </>
  )
})
