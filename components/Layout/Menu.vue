<template>
  <div class="display-flex flex-column gap-8">
    <NuxtLink v-for="item in menuData"
              :key="item.name"
              :to="item.url"
              class="display-flex body align-items-center"
    >
      <span class="menu-dot"></span>
      <span>
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

import { menuData } from '~/components/Layout/menu.data';
</script>

<style lang="scss">
.menu-dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-color: var(--color-purple);
}
</style>