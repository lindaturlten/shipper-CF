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
  PlusOutlined,
} from '@ant-design/icons';
import { IDriverInfo } from './driver.types';

const HeaderContentComponent: React.FC<IDriverInfo> = ({
  onSearch,
}) => {
  return (
    <Row justify="center" align="middle" className="margin20 site-layout-background">
        <Col span={12} className="padding20">
        <div className="title-page">Driver Management</div>
        <div>Data driver yang bekerja dengan Anda.</div>
        </Col>
        <Col span={12} className="padding20 text-right">
        <Space>
            <Input size="large" placeholder="Cari Driver" prefix={<SearchOutlined className="text-color-red" />} onChange={onSearch}></Input>
            <Button type="primary" size="large" danger>Tambah Driver <PlusOutlined /></Button>
        </Space>
        </Col>
    </Row>
  );
};

export default HeaderContentComponent;