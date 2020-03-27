import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: "/",name:'index',redirect:"/index",component:()=>import("@/views/layout"),
     children:[
       {path:"/index",name:"Index",component:() => import ('../views/index/index.vue'),}
         ]
  },

  { path: "/study",name: "Study",component:()=>import("@/views/layout"),
    children:[
      { path: "/studyInfo",name: "StudyInfo",component:()=>import("@/views/study"), }
    ]
  },
  
  { path: "/life",name: "Life",component:()=>import("@/views/layout"),
  children:[
    { path: "/lifeInfo", name: "LifeInfo",component:()=>import("@/views/life"), }
  ]
  },

  { path: "/myself",name: "Myself",component:()=>import("@/views/layout"),
    children:[
      { path: "/myselfInfo", name: "MyselfInfo",component:()=>import("@/views/myself"), }
    ]
  },
  { path: "/artDetail",name: "ArtDetail",component:()=>import("@/views/layout"),
    children:[
      {path:'/artDetailInfo',name: "ArtDetailInfo", component:()=>import("@/views/artDetail")},
    ]
  },
  //搜索路由
  { path: "/search",name: "Search",component:()=>import("@/views/layout"),
    children:[
      {path:'/searchInfo',name: "SearchInfo", component:()=>import("@/views/search")},
    ]
  },

   {path:'/login',name: "Login", component:()=>import("@/views/login")},

   //后台管理部分

   {path:'/admin',name: "Admin", redirect:'/adminIndex', component:()=>import("@/views/admin")},
   //后台管理首页
   {path:'/adminView',name: "AdminView", 
   component:()=>import("@/views/admin"),
   children:[
      {path:'/adminIndex',name: "adminIndex", component:()=>import("@/views/admin/adminview/index")},
     ]
  },
   //后台管理文章查询
   {path:'/artManage',name: "ArtMangae", 
   component:()=>import("@/views/admin"),
   children:[
      {path:'/artSubmit',name: "ArtSubmit", component:()=>import("@/views/admin/artManage/artsubmit.vue")},
      {path:'/artSearch',name: "ArtSearch", component:()=>import("@/views/admin/artManage/artSearch.vue")},
     ]
  },
  {path:'/usersManage',name: "ArtMangae",   //用户查询
   component:()=>import("@/views/admin"),
   children:[
      {path:'/queryUsers',name: "queryUsers", component:()=>import("@/views/admin/userManage/usersManage.vue")},
     ]
  },
  {path:'*',name: "Not", component:()=>import("@/views/404.vue")}
];

const router = new VueRouter({
  routes
});

export default router;
