<template>
  <header class="display-flex align-items-center justify-center gap-32">
    <div class="container">
      <nav class="display-flex align-items-center width-full">
        <NuxtLink to="/"
                  aria-label="Home"
        >
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/about"
                  aria-label="about"
        >
          <span>about</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.primer {
  display: block;
}
</style>
