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
export default class ArticleCreateScreen extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      body: '',
      categories: []
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
          <Text> Createa Article Screen </Text>

          <Text> Article Title </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title}
            placeholder={"Title of the article..."}
          />
          <Text> Article body </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({body: text})}
            value={this.state.body}
            placeholder={"What is the article about..."}
          />
        </View>
      </View>
    )
  }
}
