import Cookie from 'cookie_js'

const toKen = 'admin_token'
const username = 'username'
const role = 'role'


export  function setCookie(value){
   return Cookie.set(toKen,value)
};


export  function getCookie(){
    return Cookie.get(toKen)
}

export  function removeCookie(){
    return Cookie.remove(toKen)
}

export  function setUsername(value){
    return Cookie.set(username,value)
 };

export  function getUsername(){
    return Cookie.get(username)
}

export  function removeUsername(){
    return Cookie.remove(username)
}

//存储用户权限
export  function setRole(value){
    return Cookie.set(role,value)
 };

export  function getRole(){
    return Cookie.get(role)
};

export  function removeRole(){
    return Cookie.remove(role)
};


//存储用户id

export  function setInfo(item,value){
    return Cookie.set(item,value)
};
export  function getInfo(item){
    return Cookie.get(item)
};