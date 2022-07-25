import { CurrentWeather } from './current-weather/CurrentWeather'
import { ForecastWeather } from './forecast-weather/ForeCastWeather'
import { useAppDispatch } from '../../store/hooks'
import { ICityInfo } from '@/interfaces/cityInfo.interface'
import { onChangeCurrentWeather, onChangeForeCastWeather } from './weather.slice'
import { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } from './weather.api'
import { useEffect } from 'react'

export const Weather: React.FC<{ current_city: ICityInfo }> = ({ current_city }) => {
    const dispatch = useAppDispatch()

    const lat = current_city.latitude
    const lon = current_city.longitude
    const { data: weatherData } = useGetCurrentWeatherQuery({ lat, lon })
    const { data: forecastData, isSuccess, isFetching } = useGetForecastWeatherQuery({ lat, lon })

    useEffect(() => {
        if (isSuccess && !isFetching) {
            dispatch(onChangeCurrentWeather({ ...weatherData, city: current_city.city }))
            dispatch(onChangeForeCastWeather(forecastData))
        }
    }, [isSuccess])

    return isSuccess ? (
        <>
            <CurrentWeather />
            <ForecastWeather />
        </>
    ) : null
}
