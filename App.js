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
  createStackNavigator,
  DrawerItems } from 'react-navigation';
// My Screens
import ArticleScreen from './src/presentation/screens/Article/ArticleScreen'
import ArticleEditScreen from './src/presentation/screens/Article/ArticleEditScreen'
import ArticleCreateScreen from './src/presentation/screens/Article/ArticleCreateScreen'
import ArticleDetailScreen from './src/presentation/screens/Article/ArticleDetailScreen';
import ProfileScreen from './src/presentation/screens/Profile/ProfileScreen'
import ProfileEditScreen from './src/presentation/screens/Profile/ProfileEditScreen'
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
const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    EditProfile: {
      screen: ProfileEditScreen
    }
  },{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

const ArticleStack = createStackNavigator(
  {
    Article: {
      screen: ArticleScreen
    },
    ReadArticle: {
      screen: ArticleDetailScreen
    },
    CreateArticle: {
      screen: ArticleCreateScreen
    },
    EditArticle: {
      screen: ArticleEditScreen
    }
  },{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
const AppDrawerNavigator = createDrawerNavigator(
  {
    Article:{
      screen: ArticleStack
    },
    Profile: {
      screen: ProfileStack
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
