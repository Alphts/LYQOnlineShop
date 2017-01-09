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
    Image
} from 'react-native';

var Main = require('../Main/LYQMain');

var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.lauchImageStyle}/>
        );
    },
    
    componentDidMount(){
        setTimeout(()=>{
          this.props.navigator.replace({
              component:Main
          });  
        },1500)
    }
});



const styles = StyleSheet.create({
    
    lauchImageStyle: {
        flex:1
    }
});

module.exports = Launch;
