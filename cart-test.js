import React from 'react'
import 'whatwg-fetch';
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import postReducer, { productsApi } from '../src/redux/slices/productSlice'
import Products from '../src/components/template/Products'
import Cart from '../src/components/template/Cart'

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

export function renderWithRedux(renderedComponent) {
  const store = configureStore({
    reducer: {
      postReducer,
      [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  })
  return render(<Provider store={store}>{renderedComponent}</Provider>)
}

describe('yeee', () => {
    it('renders comp correctly', () => {
      renderWithRedux(<Cart/>)
      expect(mockedNavigate).toHaveBeenCalledTimes(0);
    })
})
