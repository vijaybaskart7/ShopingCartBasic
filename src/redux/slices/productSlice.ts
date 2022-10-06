import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { queryUrl } from '../../constants/baseUrl'
import { InitialStateI, ItemI } from '../../types/definedTypes'
import { RootState } from '../store'


export const initialState: InitialStateI = {
    products: [],
    cart: []
}

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: queryUrl}),
    tagTypes: ["Products"],
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        getProductsList: builder.query<ItemI[], void>({
            query: () => `/products/products`,
            providesTags: [{ type: "Products", id: "P_LIST" }]
        })
    })
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProductToCart: (state, { payload }: PayloadAction<ItemI>) => {
            state.cart.unshift(payload)
        },
        // removeProductFromCart: ({products, cart}, { payload }: PayloadAction<ItemI>) => {
        //     cart = cart.filter((item) => item.id !== payload)
        // }
    },
})

export const cartState = (state: RootState) => state.postReducer.cart

export const { addProductToCart } = productSlice.actions

export const { useGetProductsListQuery } = productsApi

export default productSlice.reducer