/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

var Launch = require('./Component/Main/LYQLaunchImage');
var Main = require('./Component/Main/LYQMain');


export default class LYQBuy extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{name:'启动页',component:Launch}}
          configureScene={()=>{
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route,navigator)=>{
            let Component = route.component;
            return <Component {...route.passProps} navigator={navigator} />
          }}
        />
        // <Main />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LYQBuy', () => LYQBuy);
