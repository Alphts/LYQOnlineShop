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
    View
} from 'react-native';

// 引入外部的json数据
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

// 导入外部组件
var CommenView = require('./LYQHomeMiddleCommonView');

var BottomView = React.createClass({

    getDefaultProps(){
        return{
            // 回调函数
            popTopHome: null
        }
    },
    
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    // 下部分所有组件
    renderBottomItem(){
        // 组件数组
        var itemArr = [];
        var dataArr = Home_D4.data;
        for (var i = 0;i<dataArr.length;i++){
            var item = dataArr[i];
            // 创建组件 放入数组
            itemArr.push(
                <CommenView
                    title={item.maintitle}
                    subTitle={item.deputytitle}
                    rightIcon={this.dealWithImageUrl(item.imageurl)}
                    titleColor={item.typeface_color}
                    tpUrl={item.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    },

    popToTopView(data){
        console.log(data),
        this.props.popTopHome(data);
    },

    // 处理图像的尺寸
    dealWithImageUrl(url){
        if (url.search('w.h') == -1){
            return url;
        }else {
            return url.replace('w.h','120.90');
        }
    }


});


const styles = StyleSheet.create({
    container: {
        marginTop:15
    },

    topViewStyle: {

    },

    bottomViewStyle: {
        flexDirection:'row',
        flexWrap:'wrap'
    }
   
});

module.exports = BottomView;
