import Cookie from 'cookie_js'

const toKen = 'admin_token'
const username = 'username'


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
