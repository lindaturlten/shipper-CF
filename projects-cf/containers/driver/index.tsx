import React from 'react';
import {
  Layout,
  Row,
  Col,
  Space,
  Card,
} from 'antd';
import {
  EllipsisOutlined,
} from '@ant-design/icons';
import SideMenuComponent from '../../components/sideMenu';
import HeaderComponent from '../../components/header';
import HeaderContentComponent from '../../components/driver/headerContent';

const { Content } = Layout;

const data = [
  {
    name: {
      title: "Mrs",
      first: "Ludmila",
      last: "Weißbach"
    },
    dob: {
      date: "1958-08-20T12:40:41.560Z",
      age: 64
    },
    phone: "0155-3568697",
    id: {
      name: "SVNR",
      value: "70 200858 W 981"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg"
    }
  },
  {
    name: {
      title: "Mr",
      first: "Troy",
      last: "Moore"
    },
    dob: {
      date: "1986-11-01T23:14:06.431Z",
      age: 35
    },
    phone: "(863) 855-1242",
    id: {
      name: "SSN",
      value: "020-89-2216"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg"
    }
  },
  {
    name: {
      title: "Mr",
      first: "Benito",
      last: "Santos"
    },
    dob: {
      date: "1960-06-11T01:01:28.285Z",
      age: 62
    },
    phone: "961-657-346",
    id: {
      name: "DNI",
      value: "69047467-F"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg"
    }
  },
  {
    name: {
      title: "Ms",
      first: "Navya",
      last: "Anchan"
    },
    dob: {
      date: "1970-04-10T20:55:57.539Z",
      age: 52
    },
    phone: "7341966736",
    id: {
      name: "UIDAI",
      value: "991458393506"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/76.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg"
    }
  },
  {
    name: {
      title: "Mrs",
      first: "Naja",
      last: "Christiansen"
    },
    dob: {
      date: "1951-09-16T00:52:07.658Z",
      age: 71
    },
    phone: "94494432",
    id: {
      name: "CPR",
      value: "150951-0907"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/78.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/78.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/78.jpg"
    }
  }
];

const textTitle = (data: string) => {
  return (
    <div className="title-content">
      <span className="text-grey">Driver ID </span>
      <span className="text-color-red">{data}</span>
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
                <Space direction="horizontal" size={32} style={{ display: 'flex' }}>
                  {data?.map((item) => (
                    <Card 
                      size="small"
                      key={item?.id?.value}
                      title={textTitle(item?.id?.value)}
                      style={{width: "200px"}}
                      extra={<a href="#"><EllipsisOutlined /></a>}
                      className="title-content"
                    >
                      <>
                        <div className="text-grey">Nama Driver</div>
                        <div className="text-content">{item?.name?.first}, {item?.name?.last}</div>
                      </>
                    </Card>
                  ))}
                </Space>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
  );
};

export default DriverManagementContainer;