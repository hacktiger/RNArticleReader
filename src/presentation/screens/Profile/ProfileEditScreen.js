import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
//
import { NavHead } from '../../common/Header'
//
export default class ProfileEditScreen extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
    }
  }
  render () {
    return (
      <View>
        <NavHead 
          press= { () => this.props.navigation.goBack() }
          icon={'arrow-left'}
        />
        <View>
          <Text> Profile Edit Screen </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Enter your email here..."}
          />
        </View>
      </View>
    )
  }
}
