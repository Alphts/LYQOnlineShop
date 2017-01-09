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

var ShopCenterCommonCell = React.createClass({

    getDefaultProps(){
        return{
            leftIcon:'',
            leftTitle:'',
            rightTitle:''
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIcon}} style={{width:23,height: 23}}/>
                    <Text style={{fontSize:17}} >{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
                </View>
            </View>
        );
    }
});



const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between'
    },
    leftViewStyle: {
        flexDirection:'row',
        alignItems:'center'
    },
    rightViewStyle: {
        flexDirection:'row',
        alignItems:'center'
    }

});

module.exports = ShopCenterCommonCell;
