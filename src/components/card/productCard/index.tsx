import { View, Dimensions, Text, Image, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../hooks/useType'
import { addProductToCart, cartState } from '../../../redux/slices/productSlice'
import { cartScreenProp, ItemI } from '../../../types/definedTypes'

function ProductCard(props: ItemI) {
    const { id, name, color, price, img } = props
    const cart = useAppSelector(cartState)
    const dispatch = useAppDispatch()
    const navigation = useNavigation<cartScreenProp>()

    function AddButtonTitle() {
        if(cart.some((item: ItemI) => item.id === id)) return 'IN CART'
        return 'ADD TO CART'
    }

    const onPressAdd = () => {
        dispatch(addProductToCart(props))
        navigation.navigate('Cart')
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={{ uri: img }} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.fontStyle}>$<Text style={styles.categoryStyle}>{price}</Text></Text>
                </View>
                <Button
                    onPress={() => onPressAdd()}
                    title={AddButtonTitle()}
                    disabled={cart.some((item: ItemI) => item.id === id)}
                    color={color}
                />
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const offset = 40
const radius = 20

const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#a29bfe',
        height: 400,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginBottom: 10
    },
    categoryStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'red',
    },
    fontStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 300,
        width: deviceWidth - offset * 5,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10
    },
})

export default ProductCard