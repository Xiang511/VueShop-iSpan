import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //首頁
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home-View.vue'),
    },
    //會員-購物商城
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop-View.vue'),
    },
    //會員-商品詳細頁面
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop-View.vue'),
    },
    //會員-購物車
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart-View.vue'),
    },
    //會員-我的訂單
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/Order-View.vue'),
    },
    //管理員-商品管理
    {
      path: '/admin/products',
      name: 'admin-products',
      component: () => import('../views/AdminProduct-View.vue'),
    },
    //404頁面
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404-View.vue'),
    },
  ],
})

export default router
