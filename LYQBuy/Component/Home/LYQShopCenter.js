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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

// 引入外部的组件类
var CommonCell = require('./LYQShopCenterCommonView');

// 引入外部的json数据
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({
    
    getDefaultProps(){
        // 回调函数
        return{
            popToHomeView:null
        }
    },
    
    
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <CommonCell
                    leftIcon='gw'
                    leftTitle='购物中心'
                    rightTitle='4444'
                />

                {/*下部分*/}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>


            </View>
        );
    },
    
    // 返回下部分所有的item
    renderAllItem(){
        var itemArr = [];
        var dataArr = Home_D5.data;
        for (var i = 0;i<dataArr.length;i++){
            var data = dataArr[i];
            itemArr.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailUrl={data.detailurl}
                    key={i}
                    popToShopCenter = {(url)=>{this.popToHome(url)}}
                />
            );
        }
        return itemArr;
        
    },

    popToHome(url){
        // 判断
        if (this.props.popToHomeView == null) return;
        // 执行回调函数
        // alert(url);
        this.props.popToHomeView(url);
    }
    
});

// 每一个商场
var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailUrl:'',
            popToShopCenter:null
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailUrl)} >
                <View style={styles.itemView}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(detailUrl){
        // 判断
        if (this.props.popToShopCenter == null) return;
        // alert(detailUrl);
        // 执行回调函数
        this.props.popToShopCenter(detailUrl);
    }

});

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },
    
    imageStyle: {
        width:120,
        height:100,
        borderRadius:8
    },

    scrollViewStyle: {
        backgroundColor:'white',
        padding:10,
        flexDirection:'row'
    },

    itemView: {
        margin:8
    },

    shopSaleStyle: {
        //绝对定位
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'orange',
        color:'white',
        padding:2

    },

    shopNameStyle: {
        textAlign:'center',
        marginTop:5
    }

});

module.exports = ShopCenter;
