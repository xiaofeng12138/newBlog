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

   {path:'/login',name: "Login", component:()=>import("@/views/login")},


  {path:'*',name: "Not", component:()=>import("@/views/404.vue")}
];

const router = new VueRouter({
  routes
});

export default router;
