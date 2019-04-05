import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HouseholdScreen from '../screens/HouseholdScreen';
import NeighborhoodScreen from '../screens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <FontAwesome
        name='dashboard'
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  ),
};

const HouseholdStack = createStackNavigator({
  Household: HouseholdScreen,
});

HouseholdStack.navigationOptions = {
  tabBarLabel: 'Household',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const NeighborhoodStack = createStackNavigator({
  Neighborhood: NeighborhoodScreen,
});

NeighborhoodStack.navigationOptions = {
  tabBarLabel: 'Neighborhood',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
        name='city'
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  HouseholdStack,
  NeighborhoodStack,
});
