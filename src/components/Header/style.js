/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-06 22:12:16
 * @LastEditors: liuxin 1213736251@qq.com
 * @LastEditTime: 2022-12-07 16:56:38
 * @Description:
 * @FilePath: /lx-music-react/src/components/Header/style.js
 */
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .header-l {
    display: flex;
    align-items: center;
    a {
      display: block;
      height: 70px;
      padding: 0 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ccc;
      &:hover {
        color: #fff;
        background-color: #000;
      }
    }
    .headerActive {
      color: #fff;
      background-color: #000;
    }
  }
  .header-r {
    display: flex;
    align-items: center;
    .searchInput {
      margin-right: 15px;
      border-radius: 30px;
    }
  }
  .line {
    height: 5px;
    background-color: #f00;
  }
`;
