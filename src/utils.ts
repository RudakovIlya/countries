import axios, { AxiosError } from 'axios/index'

export const errorHandler = <T, U extends unknown>(
  error: U,
  callback: (value: U | T) => T | U
) => {
  const errors = error as Error | AxiosError<{ message: T }>
  if (!axios.isAxiosError(error)) {
    callback(error)
  } else {
    callback(errors.message as U)
  }
}
