<template>
  <section v-if="post" class="article-page">
    <RouterLink to="/blog" class="back-link">
      ← 返回博客
    </RouterLink>

    <header class="article-header">
      <p class="article-meta">{{ post.date }} · {{ post.category }}</p>
      <h1>{{ post.title }}</h1>
      <p class="article-description">{{ post.description }}</p>
    </header>

    <MarkdownRenderer :content="post.content" />
  </section>

  <section v-else class="empty-state">
    <h1>文章不存在</h1>
    <RouterLink to="/blog">返回文章列表</RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getPostBySlug } from '../services/content'
import MarkdownRenderer from '../components/MarkdownRenderer.vue'

const route = useRoute()
const post = computed(() => getPostBySlug(String(route.params.slug)))
</script>
