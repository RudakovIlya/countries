export type StatusType = 'loading' | 'received' | 'rejected' | 'idle'

export interface APIResponseType {
  flags: {
    svg: string
    png: string
  }
  name: string
  population: number
  region: string
  capital: string
}

export interface CountriesType {
  status: StatusType
  error: string | null
  list: APIResponseType[]
}
