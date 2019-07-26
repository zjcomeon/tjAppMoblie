import axios from 'axios'
import config from '@/config'
import qs from 'querystring'

const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的url地址 ,根据当前环境配置基础api地址
  baseURL: config.baseURL, // api的base_url
  timeout: 5000, // 请求超时,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    // 传递的参数
    if (config.data) {
      config.data = qs.stringify(config.data) // 转为formdata数据格式
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    const data = response.data
    if (data.code !== 200) {
      return
    }
    return Promise.resolve(data.data)
  },
  error => {
    console.log('err' + error)// for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)
export default service
