import { ICurrentWeather, IForecastWeather } from '@/interfaces/weather.interface'
import { createSlice } from '@reduxjs/toolkit'

const CurrentWeatherModel: ICurrentWeather | undefined = undefined
const ForecastWeatherModel: IForecastWeather | undefined = undefined

export const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        current_weather: CurrentWeatherModel,
        forecast_weather: ForecastWeatherModel,
    },
    reducers: {
        onChangeCurrentWeather: (state, action) => {
            state.current_weather = action.payload
        },
        onChangeForeCastWeather: (state, action) => {
            state.forecast_weather = action.payload
        },
    },
})

export const { onChangeCurrentWeather, onChangeForeCastWeather } = weatherSlice.actions

export const weatherReducer = weatherSlice.reducer
