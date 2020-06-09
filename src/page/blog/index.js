import React from 'react';
import {Button,Row,Col,Card } from 'antd';
import './index.less';  //引入less文件
import blogDemo from 'img/test.gif';

export default class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loss: new Date().toString(),number:15};
      }
    componentDidMount() {

    }
    renderBlogList =()=>{
        let nodes = []
        for(let i=0;i<this.state.number;i++){
            nodes.push(<Card className="blogItem" key={i}>
                        <div className="blogItem-container">
                            <div className="blog-cover">
                                <img class="cover-img" src={blogDemo}/>
                            </div>
                            <div className="blog-info">
                                <h2 className="blog-title">
                                    关于react的基础学习记录
                                </h2>
                                <div className="blog-intro">
                                    主要是记录react的基础
                                </div>
                                <div className="blog-base">
                                    <span>作者：张三</span>
                                    <span>浏览次数：张三</span>
                                    <span>评论次数：张三</span>
                                </div>
                            </div>
                        </div>
                    </Card>)

            
        }
        return nodes
    }
    render(){
        return (
            <div className="container">
                <div className="animated bounceInRight blogList" style={{}}>

                    {this.renderBlogList()}
                </div>
                
            </div>
        )
    }
}