import React from 'react';
import {
  Layout,
  Avatar,
} from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
        // <Layout className="site-layout">
            <Header className="site-layout-background text-right">
                Hello, <span className="text-red">Shipper User</span>
                <Avatar icon={<UserOutlined />} />
            </Header>
    //   </Layout>
  );
};

export default HeaderComponent;