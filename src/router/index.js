import {
  createRouter as createVueRouter,
  createWebHashHistory,
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ArticleView from '../views/ArticleView.vue'
import CategoryView from '../views/CategoryView.vue'
import PlannerView from '../views/PlannerView.vue'

export function createRouter() {
  return createVueRouter({
    history: createWebHashHistory(),

    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/blog',
        name: 'blog',
        component: BlogView,
      },
      {
        path: '/blog/category/:category',
        name: 'category',
        component: CategoryView,
      },
      {
        path: '/blog/:slug',
        name: 'article',
        component: ArticleView,
      },
      {
        path: '/planner',
        name: 'planner',
        component: PlannerView,
      },
    ],

    scrollBehavior() {
      return { top: 0 }
    },
  })
}
