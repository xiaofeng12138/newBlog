import axios from 'axios';
import {
  Message
} from 'element-ui';

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'; //判断是dev 还是pro 环境

const service = axios.create({
  baseURL: BASEURL,
  timeout: 50000,
});


export default service;
