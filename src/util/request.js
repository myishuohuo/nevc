import axios from 'axios'
import conf from '../../config/remoteHost';
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

if (process.env.NODE_ENV === 'production') {
  // 是否有缓存
    if (!sessionStorage.host) {
    // 是否是外部设置
      if (process.env.HOST_ENV) {
        sessionStorage.host = process.env.HOST_ENV;
      } else {
        sessionStorage.host = conf.prod;
      }
    } else {
      sessionStorage.host = conf.prod;
    }
  } else if (process.env.HOST_ENV) {
    sessionStorage.host = process.env.HOST_ENV;
  } else {
    sessionStorage.host = conf.dev;
  }
  window.host = sessionStorage.host;
  window.imgUrl = conf.imgUrl;

// 创建axios实例
const service = axios.create({
  baseURL: host, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * status 可结合自己业务进行修改
  */
    const res = response.data
    if (res.status !== 1) {
      // console.log(res)
      // Message({
      //   message: res.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })

      //
      if (res.status === 403 || res.status === 404 || res.status === 401) {
        // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // })
        console.log('err')
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
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
