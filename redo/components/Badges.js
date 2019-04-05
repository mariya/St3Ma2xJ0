import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

export class Badges extends React.Component {
  render() {
    return (
      <View>
        <MaterialCommunityIcons
        name='food-apple'
        size={80}
        color={Colors.green}
      /><Text style={{ 'fontSize': 20, color: Colors.orange }}>Foodie</Text>


        <MaterialCommunityIcons
        name='medical-bag'
        size={80}
        color={Colors.green}
      />
        <Text style={{ 'fontSize': 20, color: Colors.orange }}>Medic</Text>


        <MaterialCommunityIcons
        name='water'
        size={80}
        color={Colors.green}
      />
        <Text style={{ 'fontSize': 20, color: Colors.orange }}>Hydro</Text>
      </View>
    );
  }
}
