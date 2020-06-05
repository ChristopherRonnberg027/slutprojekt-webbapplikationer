<template>
  <div id="app">
    <div>
      <the-header />
      <the-navigation />
    </div>
    <router-view/>
    <contact-info/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheNavigation from '@/components/TheNavigation'
import ContactInfo from '@/components/ContactInfo'

export default {
  components: {
    TheHeader,
    TheNavigation,
    ContactInfo
  }
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
