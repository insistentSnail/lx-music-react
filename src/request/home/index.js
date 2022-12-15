/*
 * @Author: 刘鑫 1213736251@qq.com
 * @Date: 2022-12-13 16:44:04
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 15:08:14
 * @FilePath: \lx-music-react\src\request\home\index.js
 * @Description:
 */
import api from '../index'
export const getBanner = data =>
  api({
    url: '/banner',
    method: 'get',
    params: data
  })
