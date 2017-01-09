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


var CommonView = React.createClass({

    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
            tpUrl:'',// 下一级界面的url
            // 回调函数
            callBackClickCell: null
        }
    },
    
    render() {
        return (
            <TouchableOpacity
                onPress={()=>this.clickCell(this.props.tpUrl)}
                style={{backgroundColor:'red',height:59,marginBottom:1,marginRight:1,width:width * 0.5 - 1}}>

                <View style={styles.container}>
                    {/*左侧*/}
                    <View>
                        <Text style={{color:this.props.titleColor,fontSize:18}}>{this.props.title}</Text>
                        <Text style={{color:'gray',fontSize:13}}>{this.props.subTitle}</Text>
                    </View>
                    {/*右侧*/}
                    <Image
                        source={{uri:this.props.rightIcon}}
                        style={{width:64,height:43,resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>

        );
    },

    clickCell(data){
        // 判断处理
        if (this.props.callBackClickCell == null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:width * 0.5 - 1,
        height:59,
        marginBottom:1,
        // marginTop:1,
        marginRight:1,
        flexDirection:'row',

        alignItems:'center',
        justifyContent:'space-around'
    }
});

module.exports = CommonView;
