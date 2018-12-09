import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
//
import { NavHead } from '../../common/Header'
import ActionButton from 'react-native-action-button';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//
class ProfileScreen extends Component {
  render () {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <NavHead 
          press= { () => this.props.navigation.openDrawer() }
          icon={'bars'}
        />
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          onPress = {() => this.props.navigation.navigate('EditProfile')}
          renderIcon = {() => <Icon name="md-create" style={styles.actionButtonIcon} /> }
        />
      </View>
    )
  }
}

export default withNavigation(ProfileScreen);
//
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
