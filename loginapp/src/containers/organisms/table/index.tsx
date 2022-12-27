import React, { useContext, useEffect, useState } from 'react'
import { Alert, StyleProp, View, ViewStyle } from 'react-native'
import { StoreContext } from '../../../store/storeProvider';
import { useGetSDK } from '../../../utils/hooks/useSDK';
import { MESSAGES } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native'
import Label from '../../atoms/label';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const Table = ({
  headers = [],
  data = [],
  onSelect,
}: {
  headers: string[]
  data: any
  onSelect: any
}) => {

  const generateKey = (cell: string, index: number) => (
    `${cell}-${index}-${new Date().getTime()}`
  )
  const filterData = (data: any) => (
      data.map((d: any) => {
        return Object.values(d)
      }).map((info: string[]) => (
        info.map(i => i.length > 8 ? `${i.slice(0, 6)}...` : i)
      ))
    )

  const renderHeaders = (headers: string[]) => {
    return (
      <View style={styles.headerOuter as StyleProp<ViewStyle>}>
        {
          headers.map((header: string, index: number) => (
            <View key={`${header}-${index}`} style={styles.headerInner as StyleProp<ViewStyle>}>
              <Label text={header.toUpperCase()} fontSize={14} bold={'500'} />
            </View>
          ))
        }
      </View>
    )
  }

  const renderCells = (data: any) => {
    const filteredData = filterData(data);
    return (
      <ScrollView style={styles.rowOuter as StyleProp<ViewStyle>}>
        {
          filteredData.map((row: any) => (
            <TouchableOpacity style={styles.rowInner as StyleProp<ViewStyle>} onPress={() => onSelect(row)}>
              {
                row.map((cell: string, index: number) => (
                    index > 0 && <View key={generateKey(cell, index)} style={styles.cell as StyleProp<ViewStyle>}>
                      <Label text={cell} fontSize={14} bold={'200'} />
                    </View>
                  )
                )
              }
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  }

  const renderTable = (headers: string[], data: any) => (
    <View style={styles.tableContainer as StyleProp<ViewStyle>}>
      {renderHeaders(headers)}
      {renderCells(data)}
    </View>
  )

  return (
    <View style={styles.mainContainer as StyleProp<ViewStyle>}>
      {renderTable(headers, data)}
    </View>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxHeight: '100%',
  },
  headerOuter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '5%',
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: '10%',
    height: '100%',
    backgroundColor: '#1aebb7'
  },
  rowOuter: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 110,
  },
  rowInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 10,
    width: '96%',
    minHeight: 20,
  },
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: '10%',
    minHeight: 20,
  }
}