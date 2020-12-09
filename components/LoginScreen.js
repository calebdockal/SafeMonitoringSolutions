import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/Main-Logo-2.png')}
          style={styles.logo}></Image>
        <View style={{flex: 1}}>
          <View>
            <TextInput style={styles.txtInput} placeholder="Email"></TextInput>
            <TextInput
              style={styles.txtInput}
              placeholder="Password"></TextInput>
          </View>
          <View style={styles.forgotPswd}>
            <TouchableOpacity>
              <Text style={{textDecorationLine: 'underline'}}>
                I forgot my password
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signInBtn}
              onPress={() => this.props.navigation.navigate('Scan')}>
              <Text style={styles.signInTxt}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.noAccountStyle}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                style={{marginLeft: 5}}
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{textDecorationLine: 'underline'}}>
                  Click Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    borderWidth: 0.8,
    borderColor: '#DDDDDD',
    backgroundColor: '#EEEEEE',
    width: 310,
    height: 40,
    borderRadius: 10,
    margin: 5,
  },
  forgotPswd: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginBottom: 30,
  },
  signInBtn: {
    backgroundColor: '#002892',
    width: 300,
    height: 47,
    borderRadius: 100,
    borderWidth: 0.8,
  },
  signInTxt: {
    alignSelf: 'center',
    marginTop: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  noAccountStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  logo: {flex: 1, resizeMode: 'contain', width: '80%', height: '80%'},
});
