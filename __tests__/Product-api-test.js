import React from 'react'
import { screen, fireEvent } from '@testing-library/react-native';
import Products from '../src/components/template/Products';
import ProductCard from '../src/components/card/productCard';
import { mockApiData } from '../helpers/mocks/testData/mockData'


test('should verify two questions', async () => {
  const { getByText, queryByA11yState } = renderWithRedux(<ProductCard {...mockApiData[0]} />);
  fireEvent.press(await getByText('ADD TO CART'));
  expect( await getByText('Black Sheet Strappy Textured Glitter Bodycon Dress')).toBeDefined()
  expect(mockedNavigate).toHaveBeenCalledWith('Cart')
});