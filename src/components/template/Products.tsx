import { StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from 'react-native'
import { useGetProductsListQuery } from '../../redux/slices/productSlice';
import Card from '../card/productCard';
import Error from '../error';

function Products() {
  const { data, error, isLoading, refetch } = useGetProductsListQuery()

  return (
    <SafeAreaView style={styles.container}>
      <>
        {isLoading ? <ActivityIndicator /> : null}
        {error ? <Error error={error} refetch={refetch} /> : null}
        {data && data.length > 0 ? <FlatList
          data={data}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={item => item.id.toString()}
        /> : null}
      </>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6c5ce7'
  }
})

export default Products