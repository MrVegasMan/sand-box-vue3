<template>
  <div class="display-flex flex-column gap-8">
    <NuxtLink v-for="item in menuData"
              :key="item.name"
              :to="item.url"
              class="display-flex body align-items-center"
    >
      <Icon :name="item.icon"
            size="18"
            class="menu-dot"
      />

      <component :is="item.icon2" />

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
  margin-right: 5px;
}
</style>