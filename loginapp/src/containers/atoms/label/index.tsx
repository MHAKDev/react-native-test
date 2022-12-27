import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

const label = ({
  text,
  fontSize,
  color,
  bold,
}: {
  text: string;
  fontSize?: number;
  color?: string;
  bold?: string;
}) => {
  return (
    <Text style={{fontSize: fontSize || 10, color: color || '#000000', fontWeight: bold || '100'} as StyleProp<ViewStyle>}>{text}</Text>
  )
}

export default label;