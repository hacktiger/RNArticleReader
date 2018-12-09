import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
//
import { NavHead } from '../../common/Header'
//
import ArticleController from '../../../controller/ArticleController'
import Spinner from '../../common/Spinner';

export default class ArticleCreateScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userid: 1,
      message: '',
      error: false,
      categories: [],
      isLoading: false
    }
    this.ArticleCon = new ArticleController()
  }

  _handleCreateArticle = () => {
    this.setState({ isLoading: true })
    let artTitle = this.state.title;
    let artBody = this.state.body;
    let artUserid = this.state.userid;
    
    if (artTitle.length === 0 || artBody.length === 0 || artUserid === 0){
      this.setState({ message: "Please fill all information", íLoading: false })
      return;
    }

    let data = {
      title: artTitle,
      body: artBody,
      userid: artUserid
    }

    this.ArticleCon.postArticle(data)
      .then(res => this._handleResponse(res))
      .catch(err => console.log('ok'))
  }

  _handleResponse = (res) => {
    console.log(res)
    this.setState({
      isLoading: false,
      message: 'Created Article Successfully'
    })
  }

  _renderButton = () => {
    if (this.state.isLoading) {
      return <Spinner size="small"/>
    } else {
      return  <Button 
                title='Submit'
                onPress = {() => this._handleCreateArticle()}
              />
    }
  }
  _renderMessage = () => {
    if(this.state.error) {
      return <Text style={{ color: 'red', fontStyle: 'italic' }}>{this.state.message}</Text>
    } else {
      return <Text style={{ color: 'green', fontStyle: 'italic' }}>{this.state.message}</Text>
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
          <Text> AAAACREATE Article Screen </Text>

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
          { this._renderMessage() }
          { this._renderButton() }
        </View>
      </View>
    )
  }
}
