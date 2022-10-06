import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../navigator/RootStackPrams"
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit/dist/createAsyncThunk'

export interface ItemI {
    id: number
    color: string
    name: string
    price: number
    img: string
}
export interface InitialStateI {
    products: Array<ItemI> 
    cart: Array<ItemI> 
}


//Navigation
export type cartScreenProp = StackNavigationProp<RootStackParamList, 'Cart'>;
export type productsScreenProp = StackNavigationProp<RootStackParamList, 'Products'>;

//Error 

export interface ErrorProps {
    error : FetchBaseQueryError | SerializedError | undefined
    refetch: () => void
}