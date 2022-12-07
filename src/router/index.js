/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-06 20:57:06
 * @LastEditors: liuxin 1213736251@qq.com
 * @LastEditTime: 2022-12-07 22:58:05
 * @Description:
 * @FilePath: /lx-music-react/src/router/index.js
 */
import { Redirect } from 'react-router-dom';
import discover from '@/pages/discover';
import myMusic from '@/pages/myMusic';
import attention from '@/pages/attention';
import Nav1 from '@/pages/discover/Nav1';
import Nav2 from '@/pages/discover/Nav2';
import Nav3 from '@/pages/discover/Nav3';
import Nav4 from '@/pages/discover/Nav4';
import Nav5 from '@/pages/discover/Nav5';
import Nav6 from '@/pages/discover/Nav6';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: discover,
    children: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/nav1" />
      },
      {
        path: '/discover/nav1',
        component: Nav1
      },
      {
        path: '/discover/nav2',
        component: Nav2
      },
      {
        path: '/discover/nav3',
        component: Nav3
      },
      {
        path: '/discover/nav4',
        component: Nav4
      },
      {
        path: '/discover/nav5',
        component: Nav5
      },
      {
        path: '/discover/nav6',
        component: Nav6
      }
    ]
  },
  {
    path: '/myMusic',
    component: myMusic
  },
  {
    path: '/attention',
    component: attention
  }
];
export default routes;
