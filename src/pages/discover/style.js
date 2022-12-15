/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-07 22:26:04
 * @LastEditors: liuxin 1213736251@qq.com
 * @LastEditTime: 2022-12-07 23:19:09
 * @Description:
 * @FilePath: /lx-music-react/src/pages/discover/style.js
 */
import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  width: 100%;
  .topNav {
    background-color: #c20c02;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 310px;
    a {
      padding: 3px 10px;
      color: #fff;
      margin-right: 15px;
    }
    a.active,
    a:hover {
      background: #ccc;
      border-radius: 10px;
      color: #000;
    }
  }
`
