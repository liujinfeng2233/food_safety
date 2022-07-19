import React, { Component } from 'react'
import { Layout, Menu,Input, Space} from 'antd'
import {Link,Outlet}from 'react-router-dom'
import itemList from '../../config/pestconfig'
import { AudioOutlined } from '@ant-design/icons';


const { Header, Content } = Layout
const { Search } = Input
var obj={id:'01',name:'',key:'/admin/pest/jnw'};

export default class pest extends Component {


  render() {
    const onSearch=(value)=>{     
      return itemList.map(item=>{
        if(value===item.name){
          return(
           obj=item
            )}else{
          return   ''
        }
      })     
  }
    return (
      
    <div>
       <Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton className='pestsearch'/>  
       <Layout>
        <Header style={{  position: 'relative', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" >   
         <Menu.Item key='01'><Link to={obj.key}>{obj.name}</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className='layoutContent' style={{ padding: '0 50px', marginTop: 30 }}>
          <Outlet/>
        </Content>
     </Layout>
    </div>
    )
}
}