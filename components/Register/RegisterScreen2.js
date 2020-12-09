import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Register2 extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Date of Birth</Text>
        </View>
        <View>
          <Text>Street Address</Text>
          <TextInput
            placeholder="Street Address"
            style={styles.streetAdd}></TextInput>
          <Text>City</Text>
          <Text>State/Province</Text>
          <Text>ZP/Postal Code</Text>
          <TextInput placeholder="ZP/Postal"></TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={styles.nextBtnStyle}
            onPress={() => this.props.navigation.navigate('Register3')}>
            <Text>Next</Text>
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
  streetAdd: {
    borderWidth: 0.3,
    borderColor: 'black',
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
