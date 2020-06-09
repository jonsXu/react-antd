import React from 'react';
import {Icon, Button,Menu } from 'antd';

import './index.less';


export default class Header extends React.Component{
    constructor(props){
      super(props)
    }
    state = {
      userName: "",
      date:'',
      };
      componentWillMount(){
        this.setState({userName:'韩梅梅'})
  
        setInterval(()=>{
          this.setState({date:window.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')})
        },1000)
        
      }
      render() {
        return (
          <div className="header">
            <div className="main">
              <Icon type="bell" className="f-left" />
              <span className="f-right">退出</span>
              <span className="f-right user">{this.state.userName}</span> 
               
              <Icon type="user" className="f-right"/>
            </div>
            <div className="app-line"></div>
            <ul className='info'>
                <li>{this.state.date}</li>
                <li>周三 小雨</li>
                {this.state.counter}
            </ul>
          </div>
        );
      }
      
}