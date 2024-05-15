<template>
  <NuxtLayout>
    <div>
      <h1>{{ "Error " + error?.statusCode }}</h1>
      <pre>{{ JSON.stringify(error, null, 4) }}</pre>
      <NuxtLink to="/">
        Go back home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import type { NuxtError } from '#app';
defineProps({
    error: {
        type: Object as () => NuxtError,
        default: () => ({})
    }
});
</script>
