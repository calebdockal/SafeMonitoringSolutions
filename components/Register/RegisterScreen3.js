import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Register3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Credit/Debit Card Number</Text>
          <TextInput placeholder="1234 5678 9012"></TextInput>
          <Text>Security Code</Text>
          <TextInput placeholder="123"></TextInput>
          <Text>Name of cardholder</Text>
          <TextInput placeholder="John Doe"></TextInput>
          <Text>Expiration Date</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.nextBtnStyle}
            onPress={() => this.props.navigation.navigate('Register4')}>
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
