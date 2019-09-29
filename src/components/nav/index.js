import React from 'react';
import {Icon, Button,Menu } from 'antd';

import routes from '@/routes/routers.js'
import './index.less';
const { SubMenu } = Menu



export default class Nav extends React.Component{
    state = {
        test: [],
        test2:[],
        menuTreeNode:'11',
      };
      componentWillMount(){
        let menuTreeNode = this.renderMenu(routes)

        this.setState({menuTreeNode})
        setTimeout(()=>{
          this.setState({test:['test','test']})
        },100)
        setTimeout(()=>{
          this.setState({test2:['test2','test2']})
        },1000)
      }
      renderMenu=(data)=>{
        return data.map(item=>{
          if(item.children){
            return (
              <SubMenu title={item.title} key={item.key}>
                {this.renderMenu(item.children)}
              </SubMenu>
            )
            
          }
          return (<Menu.Item title={item.title}  key={item.key}>{item.title}</Menu.Item>)
        })
      }
      render() {
        return (
          <div >
             <Menu
             mode="inline"
             theme="dark"
            >
            {this.state.menuTreeNode}
            </Menu>
            
          </div>
        );
      }
      
}