/*
 * @Author: 刘鑫 1213736251@qq.com
 * @Date: 2022-12-15 15:53:52
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 16:43:22
 * @FilePath: \lx-music-react\src\pages\discover\Nav1\store\reducer.js
 * @Description:
 */
import { Map } from 'immutable'
import { CHANGE_BANNER } from './constant'

const defaultState = Map({
  banner: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BANNER:
      return state.set('banner', action.data)
    default:
      return state
  }
}

export default reducer
