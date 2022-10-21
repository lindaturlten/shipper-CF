import React from 'react';
import {
  Row,
  Col,
  Input,
  Button,
  Space,
} from 'antd';
import {
  SearchOutlined,
} from '@ant-design/icons';

const HeaderContentComponent: React.FC = () => {
  return (
    <Row justify="center" align="middle" className="margin20 site-layout-background">
        <Col span={12} className="padding20">
        <div className="title-page">Driver Management</div>
        <div>Data driver yang bekerja dengan Anda.</div>
        </Col>
        <Col span={12} className="padding20 text-right">
        <Space>
            <Input size="large" placeholder="Cari Driver" prefix={<SearchOutlined className="text-color-red" />}></Input>
            <Button type="primary" size="large" danger>Tambah Driver +</Button>
        </Space>
        </Col>
    </Row>
  );
};

export default HeaderContentComponent;