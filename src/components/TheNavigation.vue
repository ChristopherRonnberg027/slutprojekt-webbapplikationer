<template>
  <nav>
    <router-link v-for="link in links" :key="link.name" :to="link.route"><span>{{link.text}}</span></router-link>
    <a href="#bot">Contact</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {text: 'Home', route:'/'},
        {text: 'Products', route:'/products'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;

  a {
    padding: .3rem;
    margin: 0 1rem;
    text-decoration: none;
    border-bottom: 3px solid rgba(0,0,0,0);
    font-weight: 900;
    color: black;
  }

  a:visited {
    color: black;
  }

  a:hover {
    border-bottom-color: black;
  }

  a.router-link-exact-active {
    border-bottom-color: #58e0b7;
  }
}

</style>
