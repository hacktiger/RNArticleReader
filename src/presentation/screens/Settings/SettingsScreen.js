import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
//
import { NavHead } from '../../common/Header'
//
export default class SettingsScreen extends Component {
  render () {
    return (
      <View>
        <NavHead 
          press= { () => this.props.navigation.openDrawer() }
          icon={'bars'}
        />
        <Text> Settings Screen </Text>
      </View>
    )
  }
}
