import React from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import { ItemI } from '../../../types/definedTypes';

function CartCard(props: ItemI) {
  const { img, name, price } = props;
  return (
    <View style={styles.boxWidth}>
      <View style={styles.contentContainer}>
        <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: img }} />
        </View>
        <View style={styles.priceQtyContainer}>
          <Text>$<Text style={styles.priceTagStyle}>{price}</Text></Text>
          
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </View>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  boxWidth: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
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
    backgroundColor:'#DFCDE2',
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
  textStyle:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceTagStyle:{
    fontSize: 32,
    fontWeight: 'bold'
  }
})

export default CartCard