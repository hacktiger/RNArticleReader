import React, { Component } from "react";
import { View } from "react-native";
import { Header, Left } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
//
import ArticleList from './ArticleList'
import { NavHead } from '../../common/Header'
//
export default class ArticleScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    return (
      <View>
        <NavHead onPress={this.props}/>
        <ArticleList />
      </View>
    );
  }
}
