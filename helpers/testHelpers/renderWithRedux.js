import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
// import store from '../src/redux/store'
import { configureStore } from '@reduxjs/toolkit'
import postReducer, { productsApi } from '../../src/redux/slices/productSlice'
import { create } from 'react-test-renderer'

function renderWithRedux(renderedComponent) {
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

function createWithRedux(renderedComponent) {
  const store = configureStore({
    reducer: {
      postReducer,
      [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  })
  return create(<Provider store={store}>{renderedComponent}</Provider>)
}

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));


  export { renderWithRedux, createWithRedux, mockedNavigate }