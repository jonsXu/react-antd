import React from 'react';
import {Button,Row,Col} from 'antd';
import './index.less';

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <Row>
                    <Col span={6} >111</Col>
                    <Col span={6} >111</Col>
                    <Col span={6} >111</Col>
                    <Col span={6} >111</Col>
                </Row>
                <Row>
                    <Col span={6} >111</Col>
                    <Col span={6} >111</Col>
                    <Col span={6} >111</Col>
                    <Col span={6} >111</Col>
                </Row>
            </div>
        )
    }
}