import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

export class Badges extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>

          <Text style={styles.header}> <MaterialCommunityIcons
                name='medal'
                style={styles.icon}
                size={30}

              />Achievements</Text>
        </View>
        <View style={styles.container}>

          <View style={styles.circle}>
            <View style={styles.badge}>
                <MaterialCommunityIcons
                name='food-apple'
                style={styles.icon}
                size={20}

              /><Text style={styles.text}>Foodie</Text>
            </View>
          </View>
          <View style={styles.circle}>
            <View style={styles.badge}>
                <MaterialCommunityIcons
                name='medical-bag'
                style={styles.icon}
                size={20}

              /><Text style={styles.text}>Medic</Text>
            </View>
          </View>

          <View style={styles.circle}>
            <View style={styles.badge}>
                <MaterialCommunityIcons
                name='water'
                style={styles.icon}
                size={20}

              /><Text style={styles.text}>Hydro</Text>
            </View>
          </View>

          <View style={styles.circle}>
            <View style={styles.badge}>
                <FontAwesome
                name='handshake-o'
                style={styles.icon}
                size={20}

              /><Text style={styles.text}>Volunteer</Text>
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
    //color: Colors.orange,
    margin: 5,
    color: 'rgba(96,100,109, 1)',
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    //color: Colors.orange,
    textAlign: 'center',
    color: 'rgba(96,100,109, 1)',
  },
  text: {
    fontSize: 15,
    //color: Colors.orange,
    lineHeight: 20,
    textAlign: 'center',
    color: 'rgba(96,100,109, 1)',
  },
  circle: {
    borderColor: 'rgba(96,100,109, 1)',
    width: 80,
    height: 80,
    borderRadius: 100/2,
    //borderColor: Colors.orange,
    borderWidth: 2,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
    color: 'rgba(96,100,109, 1)',
  },
});
