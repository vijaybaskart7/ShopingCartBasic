import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { ErrorProps } from '../../types/definedTypes'

function Error(props : ErrorProps) {
  const { error, refetch} = props
  return (
    <View style={styles.container}>
        <Text style={styles.textAlert}>Api Failure</Text>
        <Text>Click Below to retry</Text>
        <TouchableOpacity onPress={refetch}>
        <Image 
        style={styles.image}
        source={require('../../assets/images/refresh.png')} 
        />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
   },
   textAlert: {
    fontSize: 26,
    color: 'red'
   },
   image: {
    width: 50,
    height:50,
    marginTop: 50
   }
})

export default Error