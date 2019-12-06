/**
 * 过滤特殊字符
 */
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
  }
  /**
  * 验证用户名
  */
  export function checkRegEmial(value){
    let reg = /^(?![^a-zA-Z]+$)(?!\D+$){2,}/; 
    return !reg.test(value) ? true : false;
  }
  /**
  * 验证密码 纯数字且不低于5位 
  */
  export function checkRegPass(value){
    let reg = /^\d{1,}$/;
    return !reg.test(value) ? true : false;
  }
  /**
  * 验证验证码
  */
  export function checkRegRepass(value){
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
  }
  
  /**
  * 没有使用default时，可以同时声明多个export。
  * 文件 import 需要花括号。
  */