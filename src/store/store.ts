import { weatherApi } from '@/components/weather/weather.api'

import { configureStore } from '@reduxjs/toolkit'
import { weatherReducer } from '@/components/weather/weather.slice'
import { cityReducer } from '../components/search/city.slice'

export const rootStore = configureStore({
    reducer: {
        city$: cityReducer,
        weather$: weatherReducer,

        // api
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootStore = ReturnType<typeof rootStore.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof rootStore.dispatch
