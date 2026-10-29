<template>
  <article class="markdown-body" v-html="renderedHtml"></article>
</template>

<script setup>
import { computed } from 'vue'
import { renderMarkdown } from '../services/markdown'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

const renderedHtml = computed(() => renderMarkdown(props.content))
</script>
