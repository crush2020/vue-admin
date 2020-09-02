import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('@/views/homepage/home'),
  //   hidden: true
  // },

  {
    path: '',
    redirect: '/home',
    name: 'home',
    hidden: true
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/homepage/home'),
    hidden: true
    // children: [{
    //   path: 'home',
    //   component: () => import('@/views/homepage/home'),
    //   hidden: true
    // }]
  },

  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统首页', icon: 'table' }
    }]
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: 'Dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: '系统首页', icon: 'table' }
  //   }]
  // },

  {
    path: '/system',
    component: Layout,
    meta: { title: '系统基础设置', icon: 'nested' },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/system/index'),
        meta: { title: '设备类型', icon: 'form' }
      },
      {
        path: 'position',
        name: 'position',
        component: () => import('@/views/system/position'),
        meta: { title: '位置类型', icon: 'form' }
      },
      {
        path: 'install',
        name: 'install',
        component: () => import('@/views/system/install'),
        meta: { title: '安装位置', icon: 'form' }
      },
      {
        path: 'workface',
        name: 'workface',
        component: () => import('@/views/system/workface'),
        meta: { title: '工作面', icon: 'form' }
      },
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/system/manage'),
        meta: { title: '设备管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/analyse',
    name: 'analyse',
    component: Layout,
    redirect: '/analyse/weight',
    children: [
      {
        path: 'weight',
        name: 'weight',
        component: () => import('@/views/analyse/weight'),
        meta: { title: '分析权重设置', icon: 'table' }
      }
    ]
  },
  {
    path: '/function',
    name: 'function',
    component: Layout,
    redirect: '/function/function1',
    meta: { title: '分析功能设置', icon: 'list' },
    children: [
      {
        path: 'function1',
        name: 'function1',
        component: () => import('@/views/function/function1'),
        meta: { title: '报警级别设置', icon: 'message' }
      },
      {
        path: 'function3',
        name: 'function3',
        component: () => import('@/views/function/function3'),
        meta: { title: '分析设置', icon: 'message' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: { title: '去百度搜索更多', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
