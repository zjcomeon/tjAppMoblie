import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/task/',
      component: Layout,
      children: [
        {
          path: 'list',
          name: 'task',
          meta: {
            title: '我的任务'
          },
          component: () => import('@/views/TaskList')
        },
        {
          path: 'detail/:id',
          name: 'detail',
          meta: {
            title: '任务详情'
          },
          component: () => import('@/views/TaskDetail')
        }
      ]
    },
    {
      path: '/my/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'my',
          meta: {
            title: '个人中心'
          },
          component: () => import('@/views/My')
        }
      ]
    }
  ]
})
