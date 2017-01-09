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

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var CommonView = require('./LYQHomeMiddleCommonView');


var HomeMiddleView = React.createClass({



    render() {
        return (
            <View style={styles.container}>
                {/*左侧视图*/}
                {this.renderLeftView()}
                {/*右侧视图*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    renderLeftView(){

        var leftData = TopMiddleData.dataLeft[0];

        return(
            <TouchableOpacity onPress={()=>alert('0')}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:leftData.img1}} style={styles.leftImageStyle} />
                    <Image source={{uri:leftData.img2}} style={styles.leftImageStyle} />
                    <Text style={{color: 'gray'}}>{leftData.title}</Text>
                    <View style={{flexDirection:'row',marginTop: 5}}>
                        <Text style={{color: 'blue',marginRight:5}}>{leftData.price}</Text>
                        <Text style={{color: 'orange',backgroundColor:'yellow'}}>{leftData.sale}</Text>
                    </View>
                </View>

            </TouchableOpacity>

        )
    },

    renderRightView(){
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        for (var i=0;i<rightData.length;i++){
            var data = rightData[i];
            itemArr.push(
                <CommonView
                key={i}
                title={data.title}
                subTitle={data.subTitle}
                rightIcon={data.rightImage}
                titleColor={data.titleColor}
                />
            )
        }

        return itemArr;
    }


});



const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:15
    },

    leftViewStyle: {
        width:width*0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        marginBottom:1,

        alignItems:'center',
        justifyContent:'center'
    },

    leftImageStyle: {
        width:120,
        height:30,
        //内容模式
        resizeMode:'contain'
    }
});

module.exports = HomeMiddleView;
