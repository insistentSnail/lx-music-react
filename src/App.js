/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-06 14:13:16
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 15:49:13
 * @Description:
 * @FilePath: /lx-music-react/src/App.js
 */
import { Provider } from 'react-redux'
import store from '@/store'
import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </HashRouter>
    </Provider>
  )
}

export default memo(App)
