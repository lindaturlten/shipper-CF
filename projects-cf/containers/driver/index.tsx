import React from 'react';
import {
  Layout,
  Row,
  Col,
  Space,
  Card,
  Avatar,
  Button,
} from 'antd';
import {
  EllipsisOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import SideMenuComponent from '../../components/sideMenu';
import HeaderComponent from '../../components/header';
import HeaderContentComponent from '../../components/driver/headerContent';
import moment from 'moment';

const { Content, Footer } = Layout;

const data = [
  {
    name: {
      title: "Miss",
      first: "Crystal",
      last: "Moore"
    },
    email: "crystal.moore@example.com",
    dob: {
      date: "1978-02-02T06:14:46.762Z",
      age: 44
    },
    phone: "(947) 587-2681",
    id: {
      name: "SSN",
      value: "111-76-5488"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/46.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg"
    }
  },
  {
    name: {
      title: "Mr",
      first: "Cameron",
      last: "Carpenter"
    },
    email: "cameron.carpenter@example.com",
    dob: {
      date: "1974-02-19T12:26:46.289Z",
      age: 48
    },
    phone: "031-985-0900",
    id: {
      name: "PPS",
      value: "1088930T"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }
  },
  {
    name: {
      title: "Mr",
      first: "Boško",
      last: "Lazović"
    },
    email: "bosko.lazovic@example.com",
    dob: {
      date: "1982-09-05T01:33:22.467Z",
      age: 40
    },
    phone: "017-8184-254",
    id: {
      name: "SID",
      value: "792972456"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg"
    }
  },
  {
    name: {
      title: "Miss",
      first: "یاسمین",
      last: "گلشن"
    },
    email: "ysmyn.glshn@example.com",
    dob: {
      date: "1980-03-02T11:00:52.089Z",
      age: 42
    },
    phone: "036-03291139",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg"
    }
  },
  {
    name: {
      title: "Miss",
      first: "Emma",
      last: "Salo"
    },
    email: "emma.salo@example.com",
    dob: {
      date: "1955-01-28T17:11:45.175Z",
      age: 67
    },
    phone: "08-809-118",
    id: {
      name: "HETU",
      value: "NaNNA878undefined"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"
    }
  }
];

const textTitle = (data: string | any) => {
  return (
    <div className="title-content">
      <span className="text-grey">Driver ID </span>
      <span className="text-color-red">{data || "-"}</span>
    </div>
  )
};

const DriverManagementContainer: React.FC = () => {
  return (
      <Layout>
        <SideMenuComponent />
        <Layout className="site-layout">
          <HeaderComponent />
          <Content>
            <HeaderContentComponent />
            <Row justify="center" align="middle" className="margin20">
              <Col span={24}>
                <Space align="start" direction="horizontal" size={28} style={{ display: 'flex' }}>
                  {data?.map((item) => (
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
                  ))}
                </Space>
              </Col>
            </Row>
          </Content>
          <Footer>
            <Row justify="center" align="middle" className="margin20">
              <Col span={12}  className="text-right">
                <Button type="text" disabled style={{fontWeight: "bold"}}>
                  <LeftOutlined /> Previous Page
                </Button>
              </Col>
              <Col span={12}>
                <Button type="text" style={{fontWeight: "bold"}}>
                  Next Page <RightOutlined />
                </Button>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
  );
};

export default DriverManagementContainer;