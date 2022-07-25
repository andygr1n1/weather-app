import { ICurrentWeather } from '@/interfaces/weather.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_OPEN_WEATHER_DEFAULT_URL }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query<ICurrentWeather, { lat: number; lon: number }>({
            query: (args) =>
                `weather?units=metric&lat=${args.lat}&lon=${args.lon}&appid=${
                    import.meta.env.VITE_OPEN_WEATHER_API_KEY
                }`,
        }),
        getForecastWeather: builder.query({
            query: (args) =>
                args.lat
                    ? `forecast?units=metric&lat=${args.lat}&lon=${args.lon}&appid=${
                          import.meta.env.VITE_OPEN_WEATHER_API_KEY
                      }`
                    : '',
        }),
    }),
})

export const { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } = weatherApi
