/*
 * @Author: 刘鑫 1213736251@qq.com
 * @Date: 2022-12-15 15:53:52
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 16:12:29
 * @FilePath: \lx-music-react\src\pages\discover\Nav1\store\reducer.js
 * @Description:
 */
import { CHANGE_BANNER } from './constant'
const defaultStore = {
  banner: []
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...store, banner: action.data }
    default:
      return store
  }
}

export default reducer
