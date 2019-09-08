import React from 'react';
import {Button,Row,Col} from 'antd';
import Header from './components/header'
import Footer from './components/footer'
import './test.less';  //引入less文件
import log from 'img/test.gif';

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
            <Row>

                <Col span={3} ><img src={log} className="App-logo" alt="logo" /></Col>
                <Col span={21} >
                <Button type="primary">Primary</Button>
                    <Header>header</Header>
                    <Row></Row>
                    <Footer>footer</Footer>
                </Col>
            </Row>
        )
    }
}