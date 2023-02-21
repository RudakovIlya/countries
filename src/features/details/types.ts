import { StatusType } from '../countries/types'

interface ICurrenciesType {
  code: string
  name: string
  symbol: string
}

interface LanguagesType {
  [key: string]: string
}

export interface DetailsResponseType {
  name: string
  nativeName: string
  flag: string
  region: string
  capital: string
  population: number
  subregion: string
  topLevelDomain: string[]
  currencies: ICurrenciesType[]
  languages: LanguagesType[]
  borders: string[]
}

export interface DetailsType {
  status: StatusType
  error: string | null
  details: DetailsResponseType
  neighbors: string[]
}
