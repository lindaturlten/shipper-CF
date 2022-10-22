import React, { useEffect, useState } from 'react';
import {
  Layout,
} from 'antd';
import SideMenuComponent from '../../components/sideMenu';
import HeaderComponent from '../../components/header';
import HeaderContentComponent from '../../components/driver/headerContent';
import FooterContentComponent from '../../components/driver/footerContent';
import DriverContentComponent from '../../components/driver/driverContent';

const { Content } = Layout;

const DriverManagementContainer: React.FC = () => {
  const [driverData, setDriverData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(function () {
    async function getData() {
      const req = await fetch('https://randomuser.me/api/?results=30');
      const response= await req.json();
      setDriverData(response);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleOnChangePage = (currentPage: number) => {
    async function getData() {
      const req = await fetch(`https://randomuser.me/api/?results=30&page=${currentPage}`);
      const response= await req.json();
      setDriverData(response);
      setIsLoading(false);
    }
    getData();
  };

  //sudah cari dokumentasinya untuk request search nya, tp belum ada yg sesuai datanya.
  const handleOnSearch = (text: string) => {
    console.log('query search nya belum ketemu dokumentasinya');
  };

  return (
      <Layout>
        <SideMenuComponent />
        <Layout className="site-layout">
          <HeaderComponent />
          <Content>
            <HeaderContentComponent onSearch={handleOnSearch}/>
            <DriverContentComponent 
              data={driverData}
              loading={isLoading}
            />
            <FooterContentComponent
              onChangePage={handleOnChangePage}
            />
          </Content>
        </Layout>
      </Layout>
  );
};

export default DriverManagementContainer;