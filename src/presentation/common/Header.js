import React from 'react';
import { Header, Left } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export const NavHead = (props) => {
  return (
    <Header style={{ justifyContent: 'center' }}>
      <Left style={{ flex: 1}} >
        <Icon
          name= {props.icon}
          size={26}
          color="white"
          onPress={props.press}
        />
      </Left>
    </Header>
  )
}