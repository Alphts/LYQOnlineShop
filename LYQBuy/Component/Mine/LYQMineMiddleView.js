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
    TouchableOpacity
} from 'react-native';

// 导入外部的json数据
var MiddleData = require('./MiddleData.json');

var MiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    
    renderAllItem(){
        var itemArr = [];
        for (var i=0;i<MiddleData.length;i++){
            var data = MiddleData[i];
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title} />
            )
        }
        return itemArr;
    }
});

// 封装内部的小view
var InnerView = React.createClass({
    
    getDefaultProps(){
        return{
            iconName:'',
            title:''
        }
    },
    
    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}} >
                <View style={styles.innerViewStyle}>
                    <Image source={{uri:this.props.iconName}} style={{width: 40,height:30,marginBottom:5}}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'space-between'
    },
    innerViewStyle: {
        alignItems:'center',
        width:70,
        height:70,
        justifyContent:'center'
    }
});

module.exports = MiddleView;
