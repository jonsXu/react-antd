import React from 'react';
import {Button,Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom'
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
        // let menuTreeNode = this.renderMenu(routes)

        // this.setState({menuTreeNode})
        // setTimeout(()=>{
        //   this.setState({test:['test','test']})
        // },100)
        // setTimeout(()=>{
        //   this.setState({test2:['test2','test2']})
        // },1000)
      }
      renderMenu=(data)=>{
        /**{<AppstoreOutlined />}
         * 现在还不能使用，是因为{<AppstoreOutlined />}这个组件放在这个函数里面，被解析成了一个js对象，只有放在render里面才有效，这是我暂时想到的，
         * 后续看看课程有没有解决办法
         */
        return data.map(item=>{
          if(item.children){
            return (
              <SubMenu  title={item.title} key={item.key} icon={ <AppstoreOutlined />}>
                {this.renderMenu(item.children)}
              </SubMenu>
            )
            
          }
          return (<Menu.Item title={item.title}  key={item.key} >
              <Link to={item.key}> <AppstoreOutlined />{item.title}</Link>
            </Menu.Item>)
        })
      }
      render() {
        return (
          <div className="main-menu">
             <Menu
             mode="inline"
            >
            {this.renderMenu(routes)}
            </Menu>
            
          </div>
        );
      }
      
}