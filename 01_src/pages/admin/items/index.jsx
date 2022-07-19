import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import {Outlet,Link} from 'react-router-dom'

const { Header, Content, Footer } = Layout;
export default class Items extends Component {
  render() {
    return (
    <div>
<Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/admin/items/pest/durs">毒死蜱</Link></Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 0px', marginTop: 0 }}>
      <Outlet/>
    </Content>
  </Layout>
    </div>
    )}
}
