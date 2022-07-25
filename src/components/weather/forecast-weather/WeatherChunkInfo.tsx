import { IWeatherForcastPeriod } from '../../../interfaces/weather.interface'

export const WeatherChunkInfo: React.FC<{ chunkInfo?: IWeatherForcastPeriod[] }> = ({ chunkInfo }) => {
    if (!chunkInfo) return null

    return (
        <div className='flex flex-col'>
            {chunkInfo.map((chunk) => {
                const { temp, feels_like, humidity, pressure } = chunk.main
                const { description, icon, main } = chunk.weather[0]
                const { speed } = chunk.wind

                return (
                    <div key={chunk.id} className='flex flex-col py-4'>
                        <div className='flex gap-2'>
                            <div>
                                <div>{chunk.focus_time}</div>
                                <div>{main}</div>
                            </div>
                            {/* <div>{chunk.weather[0].main}</div> */}
                            <img src={`./assets/${icon}.png`} className='h-8' />
                        </div>
                        <div>
                            <h1 className='text-5xl'>{`${Math.round(+temp)}°C`}</h1>
                            {/* details */}
                            <div className='text-sm'>
                                <h4>Details:</h4>
                                <div className='flex'>
                                    <div className='w-24'>State</div>
                                    <div className=''>{description}</div>
                                </div>
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
                )
            })}
        </div>
    )
}
