<template>
  <section class="home-page">
    <p class="eyebrow">PERSONAL WORKSPACE</p>
    <h1>记录学习，构建知识体系。</h1>
    <p class="home-intro">
      一个用于记录技术笔记、整理学习路径和展示个人项目的空间。
    </p>

    <div class="home-links">
      <RouterLink to="/blog" class="primary-link">
        阅读技术文章
      </RouterLink>
      <RouterLink to="/planner" class="secondary-link">
        查看学习规划
      </RouterLink>
    </div>

    <section class="recent-section">
      <h2>最近的文章</h2>

      <div v-if="latestPosts.length" class="article-list">
        <ArticleCard
          v-for="post in latestPosts"
          :key="post.slug"
          :post="post"
        />
      </div>

      <p v-else>
        还没有文章。将 Markdown 文件添加到 src/posts/ 即可。
      </p>
    </section>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ArticleCard from '../components/ArticleCard.vue'
import { posts } from '../services/content'

const latestPosts = posts.slice(0, 3)
</script>
