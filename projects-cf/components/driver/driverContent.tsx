import React from 'react';
import {
  Row,
  Col,
  Space,
  Card,
  Avatar,
} from 'antd';
import {
  EllipsisOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import {IDriverInfo} from './driver.types';
import SkeletonComponent from './skeletonBar';

const DriverContentComponent: React.FC<IDriverInfo> = ({
    data,
    loading,
}) => {
  const textTitle = (data: string | any) => {
    return (
      <div className="title-content">
        <span className="text-grey">Driver ID </span>
        <span className="text-color-red">{data || "-"}</span>
      </div>
    )
  };

  return (
    <Row justify="center" align="middle" className="margin20">
        <Col span={24}>
            <Space align="start" direction="horizontal" size={28} style={{ display: 'flex' }}>
              {loading ? 
                <SkeletonComponent /> : 
                data?.results?.map((item: any) => (
                  <Card 
                    size="small"
                    key={item?.email}
                    title={textTitle(item?.id?.value)}
                    style={{width: "200px"}}
                    extra={<a href="#"><EllipsisOutlined /></a>}
                    className="title-content"
                  >
                    <Avatar size={64} icon={<UserOutlined />} src={item?.picture?.large} className="text-wrapper"/>
                    <div className="text-wrapper">
                        <div className="text-grey">Nama Driver</div>
                        <div className="text-content">{item?.name?.first}, {item?.name?.last}</div>
                    </div>
                    <div className="text-wrapper">
                        <div className="text-grey">Telepon</div>
                        <div className="text-content">{item?.phone}</div>
                    </div>
                    <div className="text-wrapper">
                        <div className="text-grey">Email</div>
                        <div className="text-content">{item?.email}</div>
                    </div>
                    <div className="text-wrapper">
                        <div className="text-grey">Tanggal Lahir</div>
                        <div className="text-content">{moment(item?.dob?.date).format('DD-MM-YYYY')}</div>
                    </div>
                  </Card>
                  ))
              }
            </Space>
        </Col>
    </Row>
  );
};

export default DriverContentComponent;