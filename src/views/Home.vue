<template>
  <div class="home">
    <div class="intro">
      <!-- <h1>Skate! Don't hate!</h1> -->
      <div class="img-container">
        <img src="@/assets/skate-hero-1.jpg" alt />
      </div>
    </div>
    <footer>
      <div class="logo-container">
        <!-- <img src="@/assets/sinus-logo.svg" alt /> -->
        <img src="../assets/test/svg_test-black-sinus.svg" alt />
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
    padding-top: 1rem;
    h1 {
      color: black;
      max-width: 50rem;
      padding-top: 2rem;
      font-size: 2rem;
      margin-left: 1rem;
      position: relative;
      z-index: 1;
      margin-bottom: -5.4rem;
    }
    .img-container {
      img {
        width: 100%;
      }
    }
  }
  footer {
    padding: 2rem;
    .logo-container {
      max-width: 200px;
      img {
        width: 100%;
      }
    }
  }
}

// @media screen and(max-width: 600px) {
//   .home {
//     .intro {
//       display: none;
//     }
//   }
// }
</style>