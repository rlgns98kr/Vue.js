import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthHandler from '../views/AuthHandler.vue'
import ImageList from '../views/ImageList'
import UploadForm from '../views/UploadForm'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/oauth2/callback',
    name: 'AuthHandler',
    component: AuthHandler
  },
  {
    path: '/',
    name: 'ImageList',
    component: ImageList
  }, {
    path: '/upload',
    name: 'UploadForm',
    component: UploadForm
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authRequiredPages = ['UploadForm'];
  const { isLoggedIn } = store.getters;

  (!!authRequiredPages.includes(to.name) && !isLoggedIn) ? next('/') : next()
})

export default router
