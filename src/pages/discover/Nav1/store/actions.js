/*
 * @Author: 刘鑫 1213736251@qq.com
 * @Date: 2022-12-15 15:54:02
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 16:14:08
 * @FilePath: \lx-music-react\src\pages\discover\Nav1\store\actions.js
 * @Description:
 */
import { CHANGE_BANNER } from './constant'
import { getBanner as getBannerApi } from '@/request/home'

const getBanner = data => ({
  type: CHANGE_BANNER,
  data
})

export const getBannerThunk = () => {
  return dispatch => {
    getBannerApi().then(res => {
      dispatch(getBanner(res.banners))
    })
  }
}
