import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import DetailAnaPage from './views/detail/AnaPage'
import DetailCouPage from './views/detail/CouPage'
import DetailForPage from './views/detail/ForPage'
import DetailPubPage from './views/detail/PubPage'
import OrderListPage from './views/OrderList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: Detail,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
  ]
})
