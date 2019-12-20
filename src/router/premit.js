import router from './index.js'
import { getCookie,removeCookie,removeUsername,getRole} from '../utils/cookie'
import { Message } from 'element-ui';

import access from './access'




router.beforeEach((to,from,next)=>{
   if(getCookie()){
     next()
      //  console.log(Boolean(to.path === '/admin'))
      //  if(to.path === '/admin' || '/artSubmit' || 'artSearch'){
     
      //     if(getRole() > 1){
      //       next()
      //     }else{
      //       return false
      //     }
      //  }else{
      //   next('/index')   //路由指向 不存在直接返回登录页
      //   Message.error('您暂无权限访问该页面')

      //  }

    //    if(to.path == '/index'){
    //      if(access.indexOf('/admin') == -1){
    //         Message.error('您暂无权限访问该页面')
    //         this.$router.push('/')
    //      }else{
    //         next()   //路由指向 不存在直接返回登录页
    //      }
    //    }else{
        // if(access.indexOf(to.path) !== -1){  // != -1 表示存在这个路由 
        //     console.log(access.indexOf(to.path))
        //      next()
        //    }else{
        //      next('/index')   //路由指向 不存在直接返回登录页
        //      Message.error('您暂无权限访问该页面')
        //     }

    //    }
      }else{
          console.log(122)
      }
    next()
  }
)