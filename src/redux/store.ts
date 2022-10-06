import { configureStore } from '@reduxjs/toolkit'

import postReducer, { productsApi } from './slices/productSlice'

const store = configureStore({
    reducer: {
        postReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
}) 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store