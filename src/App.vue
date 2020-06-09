<template>
  <div id="app">
    <div>
      <the-header />
      <the-navigation />
    </div>
    <router-view />
    <contact-info id="bot" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheNavigation from "@/components/TheNavigation";
import ContactInfo from "@/components/ContactInfo";

export default {
  components: {
    TheHeader,
    TheNavigation,
    ContactInfo
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Proza+Libre:wght@500&display=swap");
* {
  margin: 0;
  padding: 0;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
}
h1, h2, h3 {
  font-family: 'Proza Libre';
}
body {
  background-color: #c4c4c4;
  //background-color: #eee;
}

#app {
  margin: 0 auto;
  max-width: 1224px;
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  //padding: 0rem 2rem 0rem 2rem;
}
</style>
