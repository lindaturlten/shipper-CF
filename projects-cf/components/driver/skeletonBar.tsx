import React from 'react';
import {
  Card,
  Avatar,
  Skeleton,
  Space,
} from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';

const SkeletonComponent: React.FC = () => {
  return (
  <Space align="start" direction="horizontal" size={28} style={{ display: 'flex' }}>
    <Card 
      size="small"
      style={{width: "200px"}}
      className="title-content"

    >
      <Avatar size={64} icon={<UserOutlined />} className="text-wrapper"/>
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "200px"}}
      className="title-content"
    >
      <Avatar size={64} icon={<UserOutlined />} className="text-wrapper"/>
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "200px"}}
      className="title-content"
    >
      <Avatar size={64} icon={<UserOutlined />} className="text-wrapper"/>
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "200px"}}
      className="title-content"
    >
      <Avatar size={64} icon={<UserOutlined />} className="text-wrapper"/>
      <Skeleton />
    </Card>
    <Card 
      size="small"
      style={{width: "200px"}}
      className="title-content"
    >
      <Avatar size={64} icon={<UserOutlined />} className="text-wrapper"/>
      <Skeleton />
    </Card>
  </Space>
  );
};

export default SkeletonComponent;