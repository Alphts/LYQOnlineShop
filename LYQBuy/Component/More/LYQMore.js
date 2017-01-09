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
    Navigator,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var CommonCell = require('./LYQSettingCommonCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderMoreNavBar()}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="扫一扫"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell 
                            title="省流量"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="消息提醒"
                        />
                        <CommonCell
                            title="清空缓存"
                        />
                        <CommonCell
                            title="省流量"
                            rightTitle="1.3M"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于码团"
                        />
                        <CommonCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },

    renderMoreNavBar(){
        return(
            <View style={styles.moreNavBarStyle}>
                <Text style={{color:'white',fontSize:20,marginTop:10}}>更多</Text>
                <TouchableOpacity onPress={()=>alert('点击设置按钮')} style={{position:'absolute',right:10,bottom:10}}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.iconStyle} />
                </TouchableOpacity>

            </View>
        )
    }
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    moreNavBarStyle: {
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        height:64,
        alignItems:'center',
        justifyContent:'center'
    },
    iconStyle: {
        width:28,
        height:28

    }
});

module.exports = More;
