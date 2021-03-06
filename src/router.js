import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          name: 'Avaliações',
          path: '',
          component: () => import('@/views/dashboard/pages/forms/FormList'),
        },
        {
          name: 'Avaliação',
          path: '/form',
          component: () => import('@/views/dashboard/pages/forms/Form'),
        },
      ],
    },
  ],
})
