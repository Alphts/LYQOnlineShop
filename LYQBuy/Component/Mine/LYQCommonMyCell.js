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

var MyCell = React.createClass({

    getDefaultProps(){
        return{
            leftIconName:'',
            leftTitle:'',
            rightIconName:'',
            rightTitle:''
        }
    },

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    {this.rightSubview()}
                </View>
            </TouchableOpacity>

        );
    },

    // 右边的内容
    rightSubview(){
        return(
            <View style={{flexDirection:'row',alignItems:'center',marginRight:8}}>
                {this.renderRightContent()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width: 8,height: 13,marginLeft:5}}/>
            </View>
        )
    },

    // 右边具体显示的样式
    renderRightContent(){
        if (this.props.rightIconName.length == 0){
            return(
                <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
            )
        }else {
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:23,height:13}}/>
            )
        }
    }
});



const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        height:40,
        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    },
    leftImageStyle: {
        width:24,
        height:24,
        marginRight:6,
        borderRadius:12
    },
    leftTitleStyle: {

    }
});

module.exports = MyCell;
