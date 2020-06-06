<template>
  <main>
      <v-img width="100%" src="@/assets/skate-hero-1.jpg"><h1 class="display-4 ma-12">Skate, don't hate!</h1></v-img>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  .intro {
    h1 {
      max-width: 50rem;
      padding-top: 4rem;
      font-size: 4rem;
      margin-left: 1rem;
      position: relative;
      z-index: 1;
      margin-bottom: -10.4rem;
    }
    .img-container {
      img {
        width: 100%;
      }
    }
  }
  footer {
    .logo-container {
      img {
        width: 100%;
      }
    }
  }
}

@media screen and(max-width: 600px) {
  .home {
    .intro {
      display: none;
    }
  }
}
</style>