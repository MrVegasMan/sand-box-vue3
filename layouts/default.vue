<template>
  <main>
    <section class="layout">
      <LayoutSidebar />
      <div class="container">
        <slot></slot>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
