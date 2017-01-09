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
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入外部json数据
var TopMenu = require('../../LocalData/TopMenu.json');

// 引入外部组件
var TopListView = require('./LYQListView');

var TopView = React.createClass({

    getInitialState(){
      return{
          activePage:0
      }
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true} //横向
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    // ScrollView内部的组件
    renderScrollItem(){
        //组件数组
        var itemArr = [];
        // 颜色数组
        var dataArr = TopMenu.data;
        for(var i=0;i<dataArr.length;i++){
            itemArr.push(
                <TopListView key={i}
                    dataArr={dataArr[i]}
                />
            )
        }

        return itemArr;
    },

    // 指示器
    renderIndicator(){
        var indicatorArr = [],style;
        // 遍历创建组件
        for(var i=0;i<2;i++){

            // 设置原点的样式
            style = (i==this.state.activePage) ? {color:'orange'} : {color:'gray'};

            indicatorArr.push(

                <Text key={i} style={[{fontSize:25}, style]} >&bull;</Text>
            )
        }
        return indicatorArr;
    },

    // 每一帧滚动结束的时候调用(重写系统的方法)
    // 会把上面的ScrollView传下来,随便用一个形参接受就行
    onScrollAnimationEnd(e){
        // 求出当前的页码  取整
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width);
        this.setState({
            activePage:currentPage
        })
    }

});



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'

    },
    indicatorViewStyle: {
        flexDirection:'row',
        justifyContent:'center'
    }
});

module.exports = TopView;
