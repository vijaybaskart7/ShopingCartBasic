import 'react-native';
import React from 'react';
import renderer, { create } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react-native';
// import App from '../App';
import Products from './components/template/Products';
// import MockedNavigator from '../src/MockedNavigator';
import Cart from './components/template/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mockedNavigate
}));

describe('page navigation', () => {
  expect(mockedNavigate).toHaveBeenCalled();
  const page = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  const navigateToCart = page.getByTestId('navigateToCart')
})


// it('renders correctly', () => {
//   renderer.create(<App />);
// });
