<template>
  <div class="app-shell">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="site-footer">
      Personal Workspace
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>
