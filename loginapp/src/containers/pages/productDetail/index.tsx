import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native'
import { StoreContext } from '../../../store/storeProvider';
import { useGetSDK } from '../../../utils/hooks/useSDK';
import { MESSAGES } from '../../../constants/constants';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Table } from '../../organisms/table';
import { PRODUCT_LIST_HEADERS } from '../../../constants/defaultValues.constants';
import { Product } from '../../../constants/interfaces/products.interface';
import Badge from '../../atoms/badge';
import Label from '../../atoms/label';
import { colors } from '../../../assets/colorPalette';

export const ProductDetail = () => {

  const route: any = useRoute();
  const title = route?.params?.title;
  const description = route?.params?.description;
  const price = route?.params?.price;

  const renderDetails = () => (
    <View style={styles.card as StyleProp<ViewStyle>}>
      <View style={styles.inRow as StyleProp<ViewStyle>}>
        <Label text={'Title:'} fontSize={16} bold={'300'}></Label>
        <Label text={title} fontSize={14} bold={'100'}></Label>
      </View>
      <View style={styles.inRow as StyleProp<ViewStyle>}>
        <Label text={'Price:'} fontSize={16} bold={'300'}></Label>
        <Label text={price} fontSize={14} bold={'100'}></Label>
      </View>
      <View style={styles.inColumn as StyleProp<ViewStyle>}>
        <Label text={'Description:'} fontSize={16} bold={'300'}></Label>
        <Label text={description} fontSize={14} bold={'100'}></Label>
      </View>
    </View>
  )

  return (
    <View style={styles.detailsContainer as StyleProp<ViewStyle>}>
      <Label text={'DETAILS'} fontSize={24} bold={'500'}></Label>
      {renderDetails()}
    </View>
  )
}

const styles = {
  detailsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    padding: 10,
    backgroundColor: colors.bg.primaryGray,
    width: '90%',
    height: 'auto'
  },
  inRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '15%'
  },
  inColumn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    paddingTop: 10
  },
}