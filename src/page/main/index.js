import React from 'react';
import {Button,Row,Col} from 'antd';
import Header from '@/components/header'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import log from 'img/log.png';
import './index.less';  //引入less文件
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loss: new Date().toString()};
      }
    componentDidMount() {
        //调用此方法，可以动态修改主题
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

            <Col span={4} className="main-left">
               
                <Row className="main_row top">
                    <img src={log} className="main-logo" alt="logo" />
                </Row>
                <Row className="main_row navs">
                <Nav></Nav>
                </Row>
            </Col>
            <Col span={20} className="main-right">
                <Header >header</Header>
                <Row className="main-content" style={{height:'calc(100% - 103px)'}}>
                    <div className="content-box">
                        {this.props.children}
                    </div>
                    
                </Row>
                <Footer>footer</Footer>
            </Col>
        </Row>
        )
    }
}