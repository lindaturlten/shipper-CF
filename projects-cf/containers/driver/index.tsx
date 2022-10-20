import React from 'react';
import { Layout, Menu, Avatar, Image } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const menus = [
  { key: '1', icon: <HomeOutlined />, label: 'Beranda' },
  { key: '2', icon: <UserOutlined />, label: 'Driver Management' },
  { key: '3', icon: <CalendarOutlined />, label: 'Pickup' },
];

const DriverManagementContainer: React.FC = () => {
  return (
      <Layout>
        <Sider width={200} theme="light">
          <Image 
            src="https://blog.shipper.id/wp-content/uploads/2020/10/Shipper-Logo-Black-600px.png"
            preview={false}
            className="logo"
          />
          <Menu
            defaultSelectedKeys={['2']}
            mode="inline"
            theme="light"
            items={menus}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background text-right">
            Hello, <span className="text-red">Shipper User</span>
            <Avatar icon={<UserOutlined />} />
          </Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
  );
};

export default DriverManagementContainer;