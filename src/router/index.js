import {
  createRouter as createVueRouter,
  createWebHistory,
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ArticleView from '../views/ArticleView.vue'
import CategoryView from '../views/CategoryView.vue'
import PlannerView from '../views/PlannerView.vue'

export function createRouter() {
  return createVueRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HomeView },
      { path: '/blog', component: BlogView },
      { path: '/blog/category/:category', component: CategoryView },
      { path: '/blog/:slug', component: ArticleView },
      { path: '/planner', component: PlannerView },
    ],
    scrollBehavior() {
      return { top: 0 }
    },
  })
}
