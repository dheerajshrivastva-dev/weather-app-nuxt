<template>
  <main class="main-content bg-slate-600 scroll-smooth">
    <slot /> <!-- This renders the content of your pages -->
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>

.main-content {
  height: 100vh;
}

</style>

<style>
  * {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
