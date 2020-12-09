import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileStyle}>
          <Image
            source={require('../images/userIcon.png')}
            style={styles.profileImgStyle}></Image>
        </View>
        <Text>John Doe</Text>
        <View style={styles.subContainerStyle}>
          <Text>You are singed in to</Text>
          <Image
            source={require('../images/text.png')}
            style={styles.logoImg}></Image>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.btnStyle}>
              <Icon name="payment" />
              <Text style={{marginRight: 100}}>Payment Settings</Text>
              <Icon name="chevron-right" type="font-awesome" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.btnStyle}>
              <Icon name="phone" />
              <Text>Contact Us</Text>
              <Icon name="chevron-right" type="font-awesome" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.btnStyle}>
              <Icon name="question-answer" />
              <Text>Frequently Asked Questions (FAQs)</Text>
              <Icon name="chevron-right" type="font-awesome" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemRed}
            onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.btnStyle}>
              <Icon name="exit-to-app" color="red" />
              <Text style={{color: 'red'}}>Sign Out</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: '#fff',
    height: 475,
  },
  menuItem: {
    backgroundColor: '#fff',
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingVertical: 12,
    elevation: 5,
  },
  menuContainer: {
    flex: 3,
    marginBottom: 25,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuItemRed: {
    backgroundColor: '#fff',
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingVertical: 12,
    elevation: 5,
  },
  profileStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#002892',
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImgStyle: {height: 100, width: 100, resizeMode: 'contain'},
  subContainerStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoImg: {
    height: 75,
    width: 200,
    resizeMode: 'center',
  },
});
