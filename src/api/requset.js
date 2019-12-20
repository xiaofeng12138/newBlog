import axios from 'axios';
import {getCookie} from '@/utils/cookie'
import {
  Message
} from 'element-ui';

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'; //判断是dev 还是pro 环境

const service = axios.create({
  baseURL: BASEURL,
  timeout: 500000,
});


/*
 请求接口前 做一些处理  （请求拦截器）
*/
service.interceptors.request.use(function (config) {
  config.headers['token'] = getCookie()

  return config

}, function (error) {
  return Promise.reject(error);
});


export default service;
