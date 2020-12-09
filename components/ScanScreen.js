import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Scan extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            Scan your ankle bracelet to check in at your current location
          </Text>
          <View>
            <Text>This will be where the scan logo will be</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.nextBtnStyle}>
              <Text>Start Scanning</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextBtnStyle: {
    backgroundColor: 'blue',
    height: 50,
    width: 300,
    marginTop: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
