import React from 'react';
import {
  Layout,
  Menu,
  Image,
} from 'antd';
import {
  HomeTwoTone,
  UserOutlined,
  CalendarTwoTone,
} from '@ant-design/icons';

const { Sider } = Layout;

const menus = [
  { key: '1', icon: <HomeTwoTone twoToneColor="#000000" />, label: 'Beranda' },
  { key: '2', icon: <UserOutlined className="text-color-red" />, label: 'Driver Management' },
  { key: '3', icon: <CalendarTwoTone twoToneColor="#000000" />, label: 'Pickup' },
];

const SideMenuComponent: React.FC = () => {
    return (
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
    );
  };
  
  export default SideMenuComponent;