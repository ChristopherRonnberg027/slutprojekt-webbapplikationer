<template>
  <v-app>
    <the-header />
    <v-content>
      <router-view />
    </v-content>
    <contact-info />
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import ContactInfo from "@/components/ContactInfo";

export default {
  components: {
    TheHeader,
    ContactInfo
  }
};
</script>

<style lang="scss">
</style>
