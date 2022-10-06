import React from 'react'
import Cart from '../src/components/template/Cart'

const tree = createWithRedux(
    <Cart/>
)

test('Navigate Back To Products Screen From Cart', () => {
  const button = tree.root.findByProps({ testID: 'navigateToCart'}).props;
  button.onPress()
  expect(mockedNavigate).toBeCalledWith('Products')
})