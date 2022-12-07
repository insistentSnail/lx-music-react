/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-06 14:13:16
 * @LastEditors: liuxin 1213736251@qq.com
 * @LastEditTime: 2022-12-06 22:08:31
 * @Description:
 * @FilePath: /lx-music-react/src/App.js
 */
import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
function App() {
  return (
    <HashRouter>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </HashRouter>
  );
}

export default memo(App);
