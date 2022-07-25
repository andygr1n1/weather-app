import { useAppSelector } from '@/store/hooks'
import { ICurrentWeather } from '../../../interfaces/weather.interface'
import { LocationDescription } from './LocationDescription'

export const CurrentWeather = () => {
    const current_weather = useAppSelector((store) => store.weather$.current_weather) as ICurrentWeather | undefined
    if (!current_weather) return null

    const { description, icon } = current_weather.weather[0]
    const { temp, feels_like, humidity, pressure } = current_weather.main
    const { speed } = current_weather.wind

    return (
        <div className=' flex w-full flex-col'>
            <div className=' relative m-auto flex w-[fit-content]  flex-col  gap-4 rounded-lg bg-white p-4 shadow-md md:w-[400px]'>
                <LocationDescription />
                {/* header */}
                <div className='border-b-solid flex items-center justify-between gap-10 border-b border-b-gray-300'>
                    <div>
                        <h1>{current_weather.city}</h1>
                        <div>{description}</div>
                    </div>
                    <img src={`./assets/${icon}.png`} className='h-16 md:h-24' />
                </div>
                {/* body */}
                <div className='flex flex-col items-center justify-between gap-10 md:flex-row'>
                    <h1 className='text-7xl'>{`${Math.round(+temp)}°C`}</h1>
                    {/* details */}
                    <div className='text-sm'>
                        <h4>Details:</h4>
                        <div className='flex'>
                            <div className='w-24'>Feels like</div>
                            <div className=''>{`${Math.floor(feels_like)}°C`}</div>
                        </div>
                        <div className='flex'>
                            <div className='w-24'>Wind</div>
                            <div className=''>{`${speed} m/s`}</div>
                        </div>
                        <div className='flex'>
                            <div className='w-24'>Humidity</div>
                            <div className=''>{`${humidity}%`}</div>
                        </div>
                        <div className='flex'>
                            <div className='w-24'>Pressure</div>
                            <div className=''>{`${pressure} hPa`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
