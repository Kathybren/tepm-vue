import axios from 'axios'

axios.defaults.timeout = 50000
axios.interceptors.request.use(config => {
// 添加请求头
  config.headers['X-Requested-With'] = 'X-Requested-With'
  return config
}, error => {
// loadinginstace.close()
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  return data
}, error => {
  return Promise.reject(error)
})
export default axios