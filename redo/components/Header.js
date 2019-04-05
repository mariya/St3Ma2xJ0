import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'expo';
import Colors from '../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.flexContainer}>

        <View style={styles.orangeColumn}>
          <Text style={styles.warningText}>
            <FontAwesome name="exclamation-triangle"/> Potatoes expire 2019-05-03
          </Text>
          <Button title="Fix" color={Colors.green} buttonStyle={styles.button}></Button>
        </View>


        <View style={styles.greenColumn}>

          <View>
            <View  style={styles.flexContainer}>
              <Icon.Ionicons
            name='ios-person'
            size={20}
            color={Colors.orange}
          />
            <Text style={styles.profile}> Johan</Text>
            </View>

            <Text style={styles.points}>5582</Text>
            <Text style={styles.profile}>Prepper Points</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.green,
    marginTop: 10
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  orangeColumn: {
    backgroundColor: Colors.orange,
    borderRadius: 5,
    margin: 5,
    width: '45%',
    padding: 10,
  },
  greenColumn: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 5,
    backgroundColor: Colors.green,
    width: '45%',
    padding: 10,
  },
  profile: {
    fontSize: 20,
    color: Colors.orange,
  },
  points: {
    fontSize: 50,
    color: Colors.orange,
  },
  warningText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
  },
});
