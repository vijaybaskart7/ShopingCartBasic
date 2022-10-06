import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Dimensions, Pressable, FlatList, StyleSheet } from 'react-native'
import { cartState } from '../../redux/slices/productSlice'
import { productsScreenProp } from '../../types/definedTypes'
import CartCard from '../card/cartCard'
import { useAppSelector } from '../hooks/useType'

function Cart() {
  const cart = useAppSelector(cartState)
  const navigation = useNavigation<productsScreenProp>()

  function calculatePrice (): number {
    return cart.reduce((cur, acc) => cur + Number(acc.price), 0)
  }

  return (
    <View>
      <Text style={styles.totalPriceTag}>TOTAL-${calculatePrice()}</Text>
      <View style={styles.boxWidth}>
        {cart.length > 0 ? <FlatList
          data={cart}
          renderItem={({ item }) => <CartCard {...item} />}
          keyExtractor={item => item.id.toString()}
        />
          :
          (
            <>
              <Text style={{ fontSize: 32 }}>Cart is Empty </Text>
              <Pressable
                testID='navigateToCart'
                onPress={() => navigation.navigate('Products')}
              ><Text style={{ fontSize: 26 }}>Prees Here to Navigate Home</Text></Pressable>
            </>
          )}
      </View>
    </View>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  boxWidth: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  totalPriceTag: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    marginRight: 70,
    textAlign: 'right'
  },
  contentContainer: {
    flexDirection: 'row',
    marginLeft: 10
  },
  imgContainer: {
    width: '50%',
    backgroundColor: '#CDDEE2'
  },
  priceQtyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#DBEEDC'
  },
  nameContainer: {
    width: '100%',
    backgroundColor: '#DFCDE2',
    marginLeft: 10
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 300 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceTagStyle: {
    fontSize: 32,
    fontWeight: 'bold'
  }
})

export default Cart