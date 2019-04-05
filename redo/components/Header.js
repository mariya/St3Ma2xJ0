import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export class Header extends React.Component {
  render() {
    return (
      <View>
        <Icon.Ionicons
          name='ios-person'
          size={70}
          color={Colors.green}
        />
        <Text style={{ 'fontSize': 20, color: Colors.orange }}>5582 Prepper Points</Text>
      </View>
    );
  }
}
