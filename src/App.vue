<template>
  <div id="app">
    <the-header />
    <the-navigation />
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheNavigation from '@/components/TheNavigation'

export default {
  components: {
    TheHeader,
    TheNavigation
  }
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
</style>
