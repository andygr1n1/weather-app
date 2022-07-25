import { format } from 'date-fns'
import { IWeatherForcastPeriod, IForecastWeather } from '../../../interfaces/weather.interface'
import { WeatherChunkInfo } from './WeatherChunkInfo'
import { v4 as uuid } from 'uuid'
import { useAppSelector } from '@/store/hooks'

export const ForecastWeather = () => {
    const foreCastWeather = useAppSelector((store) => store.weather$.forecast_weather) as IForecastWeather | undefined
    if (!foreCastWeather) return null

    const weatherData = foreCastWeather.list?.map((weather_chunk) => ({
        ...weather_chunk,
        focus_date: format(new Date(weather_chunk.dt_txt), 'MM-dd-yyyy'),
        focus_time: format(new Date(weather_chunk.dt_txt), 'HH:mm'),
        id: uuid(),
    }))

    const weatherMap = new Map<string, IWeatherForcastPeriod[]>()

    weatherData?.forEach((weather_chunk) => {
        if (weatherMap.has(weather_chunk.focus_date)) {
            weatherMap.get(weather_chunk.focus_date)?.push(weather_chunk)
        } else {
            weatherMap.set(weather_chunk.focus_date, [weather_chunk])
        }
    })

    return (
        <div className='flex h-full w-full gap-2 bg-white p-4'>
            {Array.from(weatherMap.keys()).map((key) => {
                const chunkInfo = weatherMap.get(key)
                return (
                    <div key={key} className='flex flex-col gap-3 bg-gray-200 p-4'>
                        <div>{format(new Date(key), ' eeee, dd MMMM yyyy')}</div>
                        <WeatherChunkInfo chunkInfo={chunkInfo} />
                    </div>
                )
            })}
        </div>
    )
}
