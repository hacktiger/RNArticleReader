import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { NavHead } from '../../common/Header'
class ArticleDetailScreen extends Component{
  constructor (props) {
    super(props);
    this.articleID =  this.props.navigation.getParam('articleID', 'None');
  }
  render () {
    return (
      <View>
        <NavHead 
          press= { () => this.props.navigation.goBack() }
          icon={'arrow-left'}
        />
        <Text> DETAIL </Text>
      </View>
    )
  }
}

export default withNavigation(ArticleDetailScreen);
