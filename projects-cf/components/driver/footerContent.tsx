import React from 'react';
import {
  Layout,
  Row,
  Col,
  Button,
  Pagination,
} from 'antd';
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import type { PaginationProps } from 'antd';
import { IDriverInfo } from './driver.types';

const FooterContentComponent: React.FC<IDriverInfo>= ({
  onChangePage,
}) => {
  const { Footer } = Layout;

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <Button type="text" disabled style={{fontWeight: "bold"}}>
          <LeftOutlined /> Previous Page
        </Button>);
    }
    if (type === 'next') {
      return (
        <Button type="text" style={{fontWeight: "bold"}}>
          Next Page <RightOutlined />
        </Button>
      );
    }
    return originalElement;
  };
  
  return (
    <Footer>
        <Row justify="center" align="middle" className="margin20">
          <Pagination 
            simple 
            total={30} 
            pageSize={5} 
            defaultCurrent={1}
            itemRender={itemRender} 
            onChange={onChangePage}
          />
        </Row>
    </Footer>
  );
};

export default FooterContentComponent;