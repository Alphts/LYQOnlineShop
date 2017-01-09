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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 全局变量
var cols = 5;
var cellW = 60;
var cellH = 70;
var cellMargin = (width-cellW*cols)/(cols+1);

var HomeListView = React.createClass({

    // 外部传入的数据
    getDefaultProps(){
        return{
            dataArr:[]
        }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2) => row1!==row2});
        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    // 具体的cell
    renderRow(rowData){
        // console.log(rowData.title);
        return(
            <TouchableOpacity onPress={()=>{alert(rowData.title)}} style={styles.cellStyle} >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:rowData.image}} style={{width: 52,height:52}} />
                    <Text style={{fontSize: Platform.OS=='ios'?11:10,color: 'gray'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});



const styles = StyleSheet.create({
    contentViewStyle: {
        flexDirection:'row',
        //多个cell同行显示
        flexWrap:'wrap',
        width:width
    },

    cellStyle: {
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // justifyContent:'center',
        // alignItems:'center',
        marginLeft:cellMargin,
        marginTop:10
    }
});

module.exports = HomeListView;
