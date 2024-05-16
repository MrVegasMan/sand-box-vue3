<template>
  <aside class="sidebar display-flex flex-column gap-16 position-relative">
    <NuxtLink to="/"
              aria-label="Home"
              class="home-link"
    >
      <SVGIconLogoIco />
    </NuxtLink>

    <button type="button"
            class="button-back"
    >
      <span class="ico-24 rotate-180">
        <SVGIconArrowLR />
      </span>
    </button>

    <LayoutMenu />
  </aside>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.sidebar {
  padding: 24px;
}

.home-link {
  margin: 0 auto;
}

.button-back {
  position: absolute;
  top: 5px;
  right: 5px;

  & svg {
    transform: translateX(0);
    transition: $var-base-animation-time $var-transition-timing;
  }


  &:hover {
    & svg {
      transform: translateX(-5px);
    }
  }
}
</style>