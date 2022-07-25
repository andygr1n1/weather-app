import { Weather } from './components/weather/Weather'
import { Search } from './components/search/Search'

import { useAppSelector } from './store/hooks'
import { ICityInfo } from './interfaces/cityInfo.interface'

function App() {
    const current_city = useAppSelector((store) => store.city$.current_city) as ICityInfo | undefined
    return (
        <div className='app'>
            <Search />
            {current_city && <Weather current_city={current_city} />}
        </div>
    )
}

export default App
