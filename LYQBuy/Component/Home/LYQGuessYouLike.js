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
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

// 导入外部的组件
var CommonCell = require('./LYQShopCenterCommonView');

// 导入外部的json数据
var youLikeData = require('../../LocalData/HomeGeustYouLike.json');


var GuessYouLike = React.createClass({

    getDefaultProps(){
        return{
            api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },

    getInitialState(){
        // 创建数据源
        var ds = new  ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2})
        return{
            dataSource: ds
        }

    },

    render() {
        return (
            <View style={styles.container}>
                <CommonCell
                    leftIcon = 'cnxh'
                    leftTitle = '猜你喜欢'
                />


                 <ListView
                 dataSource={this.state.dataSource}
                 renderRow={this.renderRow}
                 />

            </View>
        );
    },

    renderRow(rowData){
        return(
            <TouchableOpacity>
                <View style={styles.cellStyle}>
                    {/*左边*/}
                    <Image source={{uri:this.dealWithImageUrl(rowData.imageUrl)}} style={styles.imageViewStyle}/>
                    {/*右边*/}
                    <View style={styles.rightCellStyle}>
                        <View style={styles.rightTopStyle}>
                            <Text>{rowData.title}</Text>
                            <Text>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomStyle}>
                            <Text style={{color:'red'}}>{rowData.subMessage}</Text>
                            <Text>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    dealWithImageUrl(url){
        if (url.search('w.h') == -1){
            return url;
        }else {
            return url.replace('w.h','120.90');
        }
    },

    // 请求数据
    componentDidMount(){
        // 从网络上请求数据
        this.loadDataFromNet();
    },

    loadDataFromNet(){
        fetch(this.props.api_url)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 更新数据源
                console.log('123');
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                })
            })
            .catch((error)=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(youLikeData.data)
                })
            })
    }

});



const styles = StyleSheet.create({
    container: {


        marginTop:25
    },

    imageViewStyle: {
        width:120,
        height:90
    },

    cellStyle: {
        backgroundColor:'white',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,

        flexDirection:'row'
    },

    rightCellStyle: {
        marginLeft:8,
        width:220,
        justifyContent:'center'
    },

    rightTopStyle: {
        flexDirection:'row',
        marginBottom: 7,
        justifyContent:'space-between'
    },

    rightBottomStyle: {
        marginTop:7
    }

});

module.exports = GuessYouLike;
