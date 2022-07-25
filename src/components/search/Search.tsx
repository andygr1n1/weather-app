import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { AsyncPaginate } from 'react-select-async-paginate'
import { onChangeCity } from './city.slice'
import { searchLoadOptions } from './search_load_options'

export const Search = () => {
    return (
        <div className='relative flex items-center justify-center gap-5 '>
            <div className='py-5'>
                <SearchSelect />
                <div className='p-2 text-xs font-semibold text-gray-900'>Bookmarks</div>
            </div>
        </div>
    )
}

const SearchSelect = () => {
    const current_city = useAppSelector((store) => store.city$.current_city)
    const dispatch = useAppDispatch()

    return (
        <AsyncPaginate
            placeholder='search for city'
            value={current_city}
            onChange={(city) => dispatch(onChangeCity(city))}
            debounceTimeout={600}
            loadOptions={searchLoadOptions}
            className='w-3/4  md:w-[440px]'
        />
    )
}
