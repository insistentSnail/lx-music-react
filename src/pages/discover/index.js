/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-06 20:59:59
 * @LastEditors: liuxin 1213736251@qq.com
 * @LastEditTime: 2022-12-07 22:46:59
 * @Description:
 * @FilePath: /lx-music-react/src/pages/discover/index.js
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { DiscoverWrapper } from './style';
import { childrenNavList } from '@/common/headerNavList';

export default memo(function discover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="topNav">
        {childrenNavList.map((ele) => {
          return (
            <NavLink key={ele.name} to={ele.link}>
              {ele.name}
            </NavLink>
          );
        })}
      </div>
      {renderRoutes(route.children)}
    </DiscoverWrapper>
  );
});
