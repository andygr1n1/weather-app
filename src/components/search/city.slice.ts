import { ICityInfo } from './../../interfaces/cityInfo.interface'
import { createSlice } from '@reduxjs/toolkit'

const CurrentCityModel: ICityInfo | undefined = undefined

export const citySlice = createSlice({
    name: 'citySlice',
    initialState: {
        current_city: CurrentCityModel,
    },
    reducers: {
        onChangeCity: (state, action) => {
            state.current_city = action.payload
        },
    },
})

export const { onChangeCity } = citySlice.actions

export const cityReducer = citySlice.reducer
