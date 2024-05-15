<template>
  <section class="section-mod-padding-big">
    <div class="container display-flex flex-row justify-between bg-purple">
      <div class="column123 max-widht-505 align-self-center">
        <div class="herader-and-subtitle-w display-flex flex-column gap-24">
          <h1 class="h1">
            Buy in-game items quick <span>
              <SVGIconLogoIco />
            </span> cheap
          </h1>
          <p class="body">
            All the offers and discounts on items from your favorite games, all in one spot
          </p>
        </div>
        <button type="button"
                class="button-master"
        >
          Get Started
        </button>
      </div>

      <div class="column123">
        <NuxtImg src="/home/home-hero-img.webp"
                 width="620"
                 height="600"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.column123 {
  width: 50%;

  @include mobile-576 {
    width: 100%;
  }
}

.max-widht-505 {
  max-width: rem(505);

  @include mobile-576 {
    max-width: none;
  }
}

.herader-and-subtitle-w {
  @include mobile-576 {
    gap: rem(12);
  }
}
</style>
