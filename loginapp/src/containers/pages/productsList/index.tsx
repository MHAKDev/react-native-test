import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native'
import { StoreContext } from '../../../store/storeProvider';
import { useGetSDK } from '../../../utils/hooks/useSDK';
import { MESSAGES } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native'
import { Table } from '../../organisms/table';
import { PRODUCT_LIST_HEADERS } from '../../../constants/defaultValues.constants';
import { Product } from '../../../constants/interfaces/products.interface';
import Badge from '../../atoms/badge';
import { AxiosResponse } from 'axios';
import Input from '../../atoms/input';

export const ProductsList = () => {
  const navigation = useNavigation();
  const context = useContext(StoreContext);
  const [products, setProducts] = context.products;
  const [selectedProducts, setSelectedProducts] = context.selectedProducts;
  const [productsToShow, setProductsToShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const SDK = useGetSDK();

  useEffect(() => {
    getProducts();
  }, [])

  const onSearch = useCallback((query: string) => {
    setSearchQuery(query);
    getProduct();
  }, [searchQuery])
 
  const getProducts = async() => {
    await SDK.ProductsService.getList()
    .then((response: any) => {
      const products = response.data.products;
      setProducts(products);
      setProductsToShow(
        products.map((p: any) => ({
            id: p.id,
            title: p.title,
            brand: p.brand,
            price: p.price
          })
        ))
      })
      .catch((error: any) => {
        Alert.alert(
          MESSAGES.UNABLE_TO_LOGIN,
          MESSAGES.CHECK_CREDENTIALS,
          [{ text: "OK" }],
          { cancelable: true }
        );
      })
  }

  const getProduct = async() => {
    if (!searchQuery.length) {
      await getProducts()
      return;
    }
    await SDK.ProductsService.getProduct(searchQuery)
    .then((response: any) => {
      const products = response.data.products;
      setProducts(products);
      setProductsToShow(
        products.map((p: any) => ({
            id: p.id,
            title: p.title,
            brand: p.brand,
            price: p.price
          })
        ))
      })
      .catch((error: any) => {
        Alert.alert(
          MESSAGES.UNABLE_TO_LOGIN,
          MESSAGES.CHECK_CREDENTIALS,
          [{ text: "OK" }],
          { cancelable: true }
        );
      })
  }

  const gotoDetails = (row: any) => {
    const product = products.find((product: Product) => product.id === row.id);
    // @ts-ignore
    navigation.navigate('Detail', {
      title: product.title,
      description: product.description,
      price: product.price
    });
  }
  
  const rowOperation = useCallback((row: any) => {
    if (products && products.length) {
      const productToAdd = products.find((product: Product) => product && product.id === row[0]);
      setSelectedProducts([...selectedProducts, productToAdd]);
    }
  }, [selectedProducts])
  
  const removeProduct = useCallback((row: Product) => {
    if (selectedProducts && selectedProducts.length) {
      const indexToRemove = selectedProducts.findIndex((product: Product) => product && product.id === row.id)
      const copy = [...selectedProducts];
      copy.splice(indexToRemove, 1);
      setSelectedProducts(copy);
    }
  }, [selectedProducts])

  return (
    <SafeAreaView>
      <View style={styles.listContainer as StyleProp<ViewStyle>}>
        <View style={styles.header as StyleProp<ViewStyle>}>
          <Input
            value={searchQuery}
            placeholder={'Search'}
            editable={true}
            textChange={(text: string) => onSearch(text)}
          />
        </View>
        <View style={styles.table as StyleProp<ViewStyle>}>
          <Table
            headers={PRODUCT_LIST_HEADERS}
            data={productsToShow}
            onSelect={(row: string) => rowOperation(row)}
          />
        </View>
        <View style={styles.pin as StyleProp<ViewStyle>}>
          {
            selectedProducts.map((product: Product) => {
              if (product) {
                return (
                  <Badge
                    id={product.id}
                    text={product.title.split('')[0]}
                    onRemove={() => removeProduct(product)}
                    onPress={() => gotoDetails(product)}
                  />
                )
              }
            })
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = {
  listContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '7%',
  },
  table: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '83%',  
  },
  pin: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    marginLeft: 30,
  }
}