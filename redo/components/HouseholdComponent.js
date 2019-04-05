import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';

class Ratio extends React.Component {
    render () {
        return (
            <View>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around'}}>
                    <Progress.Circle progress={this.props.ratio}
                                    size={60} showsText={true}
                                    formatText={p => this.props.ratio * 100 + "%"} />
                </View>
                <Text style={styles.getStartedText}>{this.props.text}</Text>
            </View>
        );
    };
}

export default class HouseholdComponent extends React.Component {
    onClickImprove() {

    }

  renderWarnings() {
      return (
          <View>
            <Text style={styles.warningText}>
                <Icon name="exclamation-triangle"/> Replace your potatoes 
            </Text>
            <Text style={styles.warningText}>
                <Icon name="exclamation-triangle"/> Save your toenails
            </Text>
        </View>
      );
  }

  render() {
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.headerText}>Your household</Text>
            </View>
            <View style={{margin: 20,  flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Ratio text="Overall" ratio={0.3} />
                <Ratio text="Health" ratio={0.52} />
                <Ratio text="Food" ratio={0.2} />
            </View>
            <Button title="Improve" onPress={this.onClickImprove}/>
            <View style={{marginLeft: 30}}>
            {this.renderWarnings()}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  warningText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
  },
  headerText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
