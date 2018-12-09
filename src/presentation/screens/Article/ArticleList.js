import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardItem, Body } from "native-base";
import { withNavigation } from "react-navigation";

const ArticleDetail = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <CardItem header button onPress={ props.press }>
        <Text>{props.data.title}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{props.data.body}</Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text>{props.data.userid}</Text>
      </CardItem>
    </View>
  );
};

export default withNavigation(ArticleDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
