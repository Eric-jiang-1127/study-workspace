<template>
  <header class="site-header">
    <RouterLink to="/" class="site-logo">
      Personal Workspace
    </RouterLink>

    <nav class="site-nav">
      <RouterLink to="/" exact-active-class="active">
        个人主页
      </RouterLink>

      <RouterLink to="/blog" active-class="active">
        MD 文章博客
      </RouterLink>

      <RouterLink to="/planner" active-class="active">
        学习规划
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
