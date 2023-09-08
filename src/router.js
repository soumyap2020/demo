import { createRouter, createWebHistory } from "vue-router";
const Login = () => import('./pages/Login')
const Dashboard = () => import('./pages/Dashboard')
const Signup = () => import('./pages/Signup')
const Posts = () => import('./pages/Posts')
const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/posts",
    component: Posts,
  },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
