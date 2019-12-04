import Vue from "vue";
import VueRouter from "vue-router";
import index from '../views/index.vue'
import Not from '../views/404.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "*",
    name: "not",
    component: Not
  }
];

const router = new VueRouter({
  routes
});

export default router;
