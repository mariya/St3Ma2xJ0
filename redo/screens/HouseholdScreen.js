import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';

function formatText(p) {
  return "30%";  // Why is p == 0?
}

class PrepComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          If you like React, you'll also like React Native.
        </Text>
        <Text>
          Instead of 'div' and 'span', you'll use native components
          like 'View' and 'Text'.
        </Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Progress.Circle progress={0.3} size={70} showsText={true} formatText={formatText} />
        </View>
        <Text>
          If you like React, you'll also like React Native.
        </Text>

      </View>
    );
  }
}

export default class HouseholdScreen extends React.Component {
  static navigationOptions = {
    title: 'Household',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <PrepComponent />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
