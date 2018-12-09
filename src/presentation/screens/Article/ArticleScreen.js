import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NavHead } from '../../common/Header'
import ActionButton from 'react-native-action-button';
import { withNavigation } from 'react-navigation';
//
import ArticleDetail from './ArticleList'
import ArticleController from '../../../controller/ArticleController'
import Spinner from "../../common/Spinner";
//
import { Card } from "native-base";

class ArticleScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  constructor (props) {
    super(props);
    this.state = {
      ArticleList: [],
      isLoading: true
    }
    this.myArticleController = new ArticleController;
  }

  componentDidMount () {
    this.myArticleController.getAllArticle()
      .then((res) => this._handleResponse(res))
      .catch((err) => this._handleError(err))
  }

  _handleError (err) {
    console.log('article screen', err);
  }
  _handleResponse (res) {
    this.setState({
      ArticleList: res.data.data,
      isLoading: false
    })
  }

  renderArticleList () {
    if (this.state.isLoading) {
      return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 400}}>
          <Spinner size="large" />
          <Text> Fetching data </Text>
        </View>
      ) 
    } else {
      if (this.state.ArticleList.length !== 0){
        return this.state.ArticleList.map(ArticleDetailData => (
          <ArticleDetail 
            key={ArticleDetailData.id} 
            data={ArticleDetailData} 
            press={()=> {
              this.props.navigation.navigate('ReadArticle', {
                articleID: ArticleDetailData.id
              });
            }}
          />
        ))
      }
    }
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <NavHead 
          press= { () => this.props.navigation.openDrawer() }
          icon={'bars'}
        />
        <ScrollView
          alwaysBounceVertical = {true}
          showsVerticalScrollIndicator = {false}
          style = {{ flex: 1 }}
        >
          <Card>
            { this.renderArticleList() } 
          </Card>
        </ScrollView> 
        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          onPress = {() => this.props.navigation.navigate('CreateArticle')}
        />
      </View>
    );
  }
}

export default withNavigation(ArticleScreen)
//
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
