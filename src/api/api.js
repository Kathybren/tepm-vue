import http from '../http/http'
import qs from 'qs'

let api = process.env.API_ROOT

export const getUser = (params) => {
  return http.post(api + '/v8/fcg-bin/v8.fcg', qs.stringify(params)).then(res => res)
}