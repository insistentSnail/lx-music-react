/*
 * @Author: 刘鑫 1213736251@qq.com
 * @Date: 2022-12-13 16:31:21
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 15:43:31
 * @FilePath: \lx-music-react\src\request\index.js
 * @Description:
 */
import axios from 'axios'
import config from './config'

const api = axios.create({
  baseURL: config.baseUrl, // 请求的公共地址部分
  timeout: config.timeOut // 请求超时时间 当请求时间超过5秒还未取得结果时 提示用户请求超时
})

api.interceptors.request.use(
  config => {
    // config 请求的信息
    return config // 将配置完成的config对象返回出去 如果不返回 请求则不会进行
  },
  err => {
    // 请求发生错误时的处理 抛出错误
    Promise.reject(err)
  }
)

api.interceptors.response.use(
  res => {
    // 我们一般在这里处理，请求成功后后端约定的错误状态码 例如状态码是500，404，403
    // res 是所有相应的信息
    return Promise.resolve(res.data)
  },
  err => {
    // 服务器响应发生错误时的处理
    Promise.reject(err)
  }
)

export default api
