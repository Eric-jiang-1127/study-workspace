<template>
  <section>
    <header class="page-heading">
      <p class="eyebrow">WRITING & NOTES</p>
      <h1>MD 文章博客</h1>
      <p>技术笔记、课程记录与项目实践。</p>
    </header>

    <div class="category-list">
      <RouterLink
        v-for="category in categories"
        :key="category"
        :to="`/blog/category/${encodeURIComponent(category)}`"
        class="category-link"
      >
        {{ category }}
      </RouterLink>
    </div>

    <div v-if="posts.length" class="article-list">
      <ArticleCard
        v-for="post in posts"
        :key="post.slug"
        :post="post"
      />
    </div>

    <p v-else>暂无文章。请在 src/posts/ 中添加 Markdown 文件。</p>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ArticleCard from '../components/ArticleCard.vue'
import { posts, getCategories } from '../services/content'

const categories = getCategories()
</script>
