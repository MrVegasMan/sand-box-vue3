<template>
  <div class="display-flex flex-column gap-8">
    <NuxtLink v-for="item in menuData"
              :key="item.name"
              :to="item.url"
              class="display-flex p-body gap-8 align-items-center"
    >
      <Icon :name="item.icon"
            size="18"
      />


      <span>
        {{ item.name }}
      </span>
      <component :is="item.icon2"
                 class="ico-32"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

import { menuData } from '~/components/Layout/menu.data';
</script>

<style lang="scss">

</style>