import React from 'react';
import {Button,Row,Col} from 'antd';
import './index.less';  //引入less文件

export default class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loss: new Date().toString()};
      }
    componentDidMount() {

    }
    render(){
        return (
            <div>
                this is blog list
            </div>
        )
    }
}