/*
 * @Author: jweboy
 * @Date: 2021-10-06 15:44:42
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:10:56
 */
import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';


const PrimaryLayout = React.memo(({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar />
      <Layout style={{ overflow: 'hidden' }}>
        <Header />
        <Layout style={{ overflowY: 'auto' }}>
          <Content >{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </Layout >
  );
});

PrimaryLayout.displayName = 'PrimaryLayout'

export default PrimaryLayout;
