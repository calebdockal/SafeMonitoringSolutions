import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 60,
            height: 120,
            width: 120,
            marginTop: 10,
          }}>
          <Image
            source={require('../../images/userIcon.png')}
            style={{
              height: 100,
              width: 100,
              resizeMode: 'center',
              alignSelf: 'center',
            }}></Image>
        </View>
        <Text style={{alignSelf: 'center'}}>Add Profile Picture</Text>
        <View>
          <Text style={styles.txtStyle}>Name</Text>
          <TextInput
            placeholder="John Doe"
            style={styles.txtInputStyle}></TextInput>

          <Text style={styles.txtStyle}>Email</Text>
          <TextInput
            placeholder="John Doe"
            style={styles.txtInputStyle}></TextInput>
          <Text style={styles.txtStyle}>Contact Number</Text>
          <TextInput
            placeholder="John Doe"
            style={styles.txtInputStyle}></TextInput>
          <Text style={styles.txtStyle}>Password</Text>
          <TextInput
            placeholder="********"
            style={styles.confirmPswrd}></TextInput>

          <TextInput
            placeholder="Confirm Password"
            style={styles.confirmPswrd}></TextInput>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.nextBtnStyle}
              onPress={() => this.props.navigation.navigate('Register2')}>
              <Text style={styles.nextTxtStyle}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  txtInputStyle: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 40,
  },
  txtStyle: {
    margin: 15,
    marginBottom: 5,
    fontWeight: 'bold',
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
  nextTxtStyle: {
    color: '#fff',
    fontSize: 20,
  },
  confirmPswrd: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 40,
  },
});
