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
      <span>
        <Icon name="line-md:logout"
              size="24"
        />
      </span>
    </button>
    <PrimeButton label="asdsad"
                 class="test-btn"
    />

    <PrimeAutoComplete />

    <LayoutMenu />
    <PrimeCalendar />
  </aside>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.sidebar {
  padding: 44px 24px;
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
      transform: translateX(5px);
    }
  }
}


</style>