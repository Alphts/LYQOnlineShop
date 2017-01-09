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
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HeaderView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}
            </View>
        );
    },

    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri:'see'}} style={styles.leftImageStyle} />
                <View style={{flexDirection:'row',width: width*0.7,alignItems:'center'}}>
                    <Text>卖卖卖电商</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width: 17,height: 17,marginLeft:5}} />
                </View>
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:8,marginRight: 8}}/>
            </View>
        )
    },

    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    },

    renderBottomItem(){
        var itemArr = [];
        var data = [{'number':'110','title':'购物券'},{'number':'12','title':'评价'},{'number':'50','title':'收藏'}];
        for(var i=0;i<data.length;i++){
            var item = data[i];
            itemArr.push(
                <TouchableOpacity activeOpacity={0.5} key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color: 'white'}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }
});



const styles = StyleSheet.create({
    container: {
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'rgba(255,96,0,1.0)',
        height:Platform.OS == 'ios'?400:200
    },

    topViewStyle: {
        flexDirection:'row',
        marginTop:Platform.OS == 'ios'?280:80,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    leftImageStyle: {
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },

    bottomViewStyle: {
        flexDirection:'row',
        // justifyContent:'space-between',
        position:'absolute',
        bottom:0
    },

    bottomInnerViewStyle: {
        width:(width/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:'white'
    }

});

module.exports = HeaderView;
