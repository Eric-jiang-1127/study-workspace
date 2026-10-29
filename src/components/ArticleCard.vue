<template>
  <article class="article-card">
    <p class="article-meta">
      {{ post.date }} ·
      <RouterLink
        :to="`/blog/category/${encodeURIComponent(post.category)}`"
      >
        {{ post.category }}
      </RouterLink>
    </p>

    <h2>
      <RouterLink :to="`/blog/${encodeURIComponent(post.slug)}`">
        {{ post.title }}
      </RouterLink>
    </h2>

    <p class="article-description">{{ post.description }}</p>

    <div class="tag-list">
      <span v-for="tag in post.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>
