/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {
  createAppContainer, 
  createDrawerNavigator, 
  DrawerItems } from 'react-navigation';
// My Screens
import ArticleScreen from './src/presentation/screens/Article/ArticleScreen'
import ProfileScreen from './src/presentation/screens/Profile/ProfileScreen'
import SettingsScreen from './src/presentation/screens/Settings/SettingsScreen'
//
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
//
const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView>
      <View style={{ height: 150, backgroundColor: 'red' }}>
        <Text> Image here </Text>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
        <View style={{ flex:1 , backgroundColor: 'green'}}>
          <Text onPress={() => props.navigation.navigate('Profile')}> LogOut </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
//
const AppDrawerNavigator = createDrawerNavigator(
  {
    Article:{
      screen: ArticleScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },{
    contentComponent: CustomDrawerComponent,
    drawerWidth: 250,
    contentOptions: {
      activeBackgroundColor: '#0000ff',
      activeTintColor: '#ffffff'
    }
  }
)
//
const AppContainer = createAppContainer(AppDrawerNavigator)
//
