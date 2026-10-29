<template>
  <section>
    <header class="page-heading">
      <p class="eyebrow">CATEGORY</p>
      <h1>{{ category }}</h1>
      <p>该分类下共有 {{ categoryPosts.length }} 篇文章。</p>
    </header>

    <div class="article-list">
      <ArticleCard
        v-for="post in categoryPosts"
        :key="post.slug"
        :post="post"
      />
    </div>

    <p v-if="!categoryPosts.length">该分类暂无文章。</p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ArticleCard from '../components/ArticleCard.vue'
import { getPostsByCategory } from '../services/content'

const route = useRoute()
const category = computed(() => String(route.params.category))
const categoryPosts = computed(() => getPostsByCategory(category.value))
</script>
