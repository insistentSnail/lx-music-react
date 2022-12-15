/*
 * @Author: 刘鑫 1213736251@qq.com
 * @Date: 2022-12-15 15:45:32
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 15:48:40
 * @FilePath: \lx-music-react\src\store\reducer.js
 * @Description:
 */
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
