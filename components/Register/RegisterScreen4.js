import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Register4 extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Type of ID</Text>
        </View>
        <View>
          <Text>
            This will be where the take photo and choose photo will be
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.nextBtnStyle}>
            <Text>Finish and Sign Up</Text>
          </TouchableOpacity>
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
