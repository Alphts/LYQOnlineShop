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
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform

} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 导入外部组件
var HomeDetail = require('../Home/LYQHomeDetail');
var TopView = require('./LYQTopView');
var MiddleView = require('./LYQHomeMiddleView');
var MiddleBottomView = require('./LYQHomeMiddleBottomView');
var ShopCenter = require('./LYQShopCenter');
var ShopCenterDetail = require('./LYQShopCenterDetailView');
var GuessYouLikeView = require('./LYQGuessYouLike');

var Main = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*设置导航栏*/}
                {this.renderNavBar()}
               <ScrollView>
                   {/*头部*/}
                   <TopView />
                   {/*中间*/}
                   <MiddleView />
                   {/*中下部分*/}
                   <MiddleBottomView
                       popTopHome={(data)=>{this.pushToDetail(data)}}
                   />

                   {/*购物中心*/}
                   <ShopCenter
                       popToHomeView = {(url)=>{this.pushToShopCenterDetail(url)}}
                   />

                   {/*猜你喜欢*/}
                   <GuessYouLikeView />

               </ScrollView>
            </View>
        );
    },

    // 首页的导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>alert('点击了')}>
                    <Text style={{marginLeft:3,marginTop:10,color: 'white',fontSize:15}}>广州</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.topInputViewStyle}
                />
                <View style={styles.navRightViewStyle}>
                    <TouchableOpacity onPress={()=>alert('点击了')}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('点击了')}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    },

    pushToDetail(data){

        alert(data);

        this.props.navigator.push(
            {
                component:HomeDetail,
                title:'详情页'
            }
        )
    },

    // 跳转到购物中心详情页
    pushToShopCenterDetail(url){
        // alert(url);
        this.props.navigator.push(
            {
                component:ShopCenterDetail,
                passProps:{'url':this.dealWithUrl(url)}
            }
        )
    },

    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','');
    }

});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        // justifyContent:'center'
        // 侧轴对齐方式
        // alignItems:'center'
    },

    navBarStyle: {
        flexDirection:'row',
        height:Platform.OS=='ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        alignItems:'center',
        justifyContent:'space-around',
        width:width

    },

    navRightViewStyle:{
      flexDirection:'row',
        height:54,
        alignItems:'center',
        // backgroundColor:'blue',
        marginTop:10
    },

    navRightImageStyle: {
        width:28,
        height:28,
        marginRight:5
    },



    topInputViewStyle: {

        width: width*0.65,
        height:Platform.OS == 'ios' ? 32 : 30,

        backgroundColor:'white',
        marginTop:Platform.OS == 'ios' ? 23 : 0,

        borderRadius:16,
        paddingLeft:10,

        fontSize:Platform.OS == 'ios' ? 13 : 10,

    },

});

module.exports = Main;
