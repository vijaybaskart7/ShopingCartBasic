import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Badge } from 'react-native-elements'
import { useAppSelector } from '../hooks/useType'
import { cartState } from '../../redux/slices/productSlice'
import { useNavigation } from '@react-navigation/native'
import { cartScreenProp } from '../../types/definedTypes'

function Header() {
    const cartQty = useAppSelector(cartState).length
    const navigation = useNavigation<cartScreenProp>()

    return (
        <View style={styles.headerMain}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>PRODUCTS</Text>
            </View>
            <View style={styles.logo}>
                <Icon name="archive" size={28} color="#900"
                    onPress={() => navigation.navigate('Cart')}
                />
                <Badge value={cartQty} status="primary"
                    containerStyle={{ position: 'absolute', top: -3, right: -15 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerMain: {
        backgroundColor: 'coral',
        width: '100%',
        height: '10%',
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingText: {
        fontSize: 26,
        color: '#FFF',
        fontWeight: 'bold'
    },
    logo: {
        alignItems: 'flex-end',
        // justifyContent: 'center',
        marginRight: 25
    }
})

export default Header