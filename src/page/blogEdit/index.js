import React from 'react';
import {Button,Row,Col,Card, Form, Input,Select,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'

import './index.less';  //引入less文件
const { TextArea } = Input
export default class BlogEdit extends React.Component{

    constructor(props) {
        super(props);
        this.state = {loss: new Date().toString(),number:15};
    }
    componentDidMount() {

    }
    renderBlogList =()=>{
    }
    onFinish=(value)=>{

    }
    uploadFM=(file)=>{
        console.log(file)
    }
    render(){
        const layout = {
            labelCol: { span: 9 },
            wrapperCol: { span: 20 },
        }
        const validateMessages = {
            required: '${label} 是必填项!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
        return (
            <div className="container">
                <div className="animated bounceInRight blogEdit" style={{}}>
                    <Row className="main_row top">
                    <Form
                        name="basic"
                        layout="inline"
                        labelCol= {{ span: 3 }}
                        wrapperCol= {{ span: 21 }}
                        onFinish={this.onFinish}
                        className="editBlogForm"
                        validateMessages={validateMessages}
                        >
                        <Form.Item
                            className="editBlogFormItem"
                            label="标题:"
                            name="title"
                            required={true}
                            rules={[{ required: true}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            className="editBlogFormItem"
                            label="类型:"
                            name="type"
                            required={true}
                            rules={[{ required: true}]}
                        >
                           <Select style={{width:"100%"}}>
                                <Select.Option value="1">公开</Select.Option>
                                <Select.Option value="2">不公开</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="封面:"
                            name="type"
                            className="editBlogFormItem"
                        >
                           <Upload action={this.uploadFM}>
                                <Button>
                                    <UploadOutlined /> 点击上传
                                </Button>
                            </Upload>,
                        </Form.Item>
                        <Form.Item
                            label="简介:"
                            name="type"
                            className="editBlogFormItem"
                            style={{width:"95%"}}
                            labelCol= {{ span: 1 }}
                            wrapperCol= {{ span: 23 }}
                            required={true}
                            rules={[{ required: true}]}
                        >
                           <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            label="正文:"
                            name="type"
                            className="editBlogFormItem"
                            style={{width:"95%"}}
                            labelCol= {{ span: 1 }}
                            wrapperCol= {{ span: 23 }}
                        >
                           <TextArea rows={10} />
                        </Form.Item>
                        <Form.Item  style={{width:"95%"}} className="submitEdit">
                            <div style={{textAlign:"center"}}>
                            <Button type="primary" htmlType="submit" style={{marginRight:"20px"}}>
                            提交
                            </Button>
                            <Button htmlType="button" >
                                取消
                            </Button>
                            </div>
                        </Form.Item>
                    </Form>
                    </Row>
                </div>
                
            </div>
        )
    }
}