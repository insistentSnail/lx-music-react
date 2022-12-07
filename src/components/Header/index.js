/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-06 20:50:46
 * @LastEditors: liuxin 1213736251@qq.com
 * @LastEditTime: 2022-12-07 23:12:54
 * @Description: 公共头部
 * @FilePath: /lx-music-react/src/components/Header/index.js
 */
import React, { memo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { HeaderWrapper } from './style';
import { headerNavList } from '@/common/headerNavList';

export default memo(function Header() {
  const [value, setValue] = useState();
  const renderItem = (ele, index) => {
    if (index < 3) {
      return (
        <NavLink to={ele.link} activeClassName="headerActive" key={index}>
          {ele.name}
        </NavLink>
      );
    } else {
      return (
        <a href={ele.link} target="_blank" rel="noreferrer" key={index}>
          {ele.name}
        </a>
      );
    }
  };
  useEffect(() => {
    console.log(value, 'value');
  }, [value]);
  return (
    <HeaderWrapper>
      <div className="wrap-v1">
        <div className="header-l">
          {headerNavList.map((ele, index) => {
            return renderItem(ele, index);
          })}
        </div>
        <div className="header-r">
          <Input
            className="searchInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            size="middle"
            allowClear
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <Button>创作者中心</Button>
          <Button type="link">登录</Button>
        </div>
      </div>
      <div className="line"></div>
    </HeaderWrapper>
  );
});
