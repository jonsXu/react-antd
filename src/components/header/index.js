import React from 'react';
import {Icon, Button ,Avatar} from 'antd';
import { UserSwitchOutlined  } from '@ant-design/icons';
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
              <a className="f-right">退出</a>
              <span className="f-right user">{this.state.userName}</span> 
               
              <Avatar className="f-right" size={26} style={{fontSize:"16px",lineHeight:"26px"}}>
                <Icon type="user"/>
              </Avatar>
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