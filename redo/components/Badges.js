import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

export class Badges extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.header}>Household Achievements</Text>
        </View>
        <View style={styles.container}>

          <View style={styles.circle}>
            <View style={styles.badge}>
                <MaterialCommunityIcons
                name='food-apple'
                style={styles.icon}
                size={40}

              /><Text style={styles.text}>Foodie</Text>
            </View>
          </View>
          <View style={styles.circle}>
            <View style={styles.badge}>
                <MaterialCommunityIcons
                name='medical-bag'
                style={styles.icon}
                size={40}

              /><Text style={styles.text}>Medic</Text>
            </View>
          </View>

          <View style={styles.circle}>
            <View style={styles.badge}>
                <MaterialCommunityIcons
                name='water'
                style={styles.icon}
                size={40}

              /><Text style={styles.text}>Hydro</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: Colors.orange,
    margin: 'auto',
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  badge: {
    // backgroundColor: Colors.red,
    //width: 100,
    // height: 100,
    // textAlign: 'center',
    // display: 'flex',
    // justifyContent: 'center',
  },
  icon: {
    color: Colors.orange,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: Colors.orange,
    lineHeight: 20,
    textAlign: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    borderColor: Colors.orange,
    borderWidth: 5,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginRight: 20,
  },
});
