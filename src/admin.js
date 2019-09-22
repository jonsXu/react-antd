import React from 'react';
import {Button,Row,Col} from 'antd';
import Header from './components/header'
import Footer from './components/footer'
import Nav from '@/components/nav'
import './test.less';  //引入less文件
import log from 'img/logo.svg';

export default class Admin extends React.Component{
    
    componentDidMount() {
        //调用吃方法，可以动态修改主题
    // window.less.modifyVars(
    //     {
    //         '@primary-color': 'red',
    //         '@link-color': '#ee5e7b',
    //         '@btn-primary-bg': 'ee5e7b',
    //     }
    // )
    // .then(() => { 

    // })
    // .catch(error => {
    //     console.log(error)
    // });
}
    render(){
        return (
            <Row className="main">

            <Col span={6} className="main-left">
               
                <Row className="main_row top">
                    <img src={log} className="main-logo" alt="logo" />
                    <span className="title">react小样</span>
                </Row>
                <Row className="main_row navs">
                <Nav></Nav>
                </Row>
            </Col>
            <Col span={18} className="main-right">
            
            <Button type="primary">Primary</Button>
                <Header>header</Header>
                <Row></Row>
                <Footer>footer</Footer>
            </Col>
        </Row>
        )
    }
}