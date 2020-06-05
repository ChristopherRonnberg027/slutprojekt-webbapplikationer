<template>
  <div class="home">
    <div class="intro">
      <h1>Skate! Don't hate!</h1>
      <div class="img-container">
        <img src="@/assets/skate-hero-1.jpg" alt />
      </div>
    </div>
    <footer>
      <div class="logo-container">
        <img src="@/assets/sinus-logo.svg" alt />
      </div>
    </footer>
  </div>
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