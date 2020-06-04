<template>
  <nav>
    <router-link v-for="link in links" :key="link.name" :to="link.route"><span>{{link.text}}</span></router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {text: 'Home', route:'/'},
        {text: 'Products', route:'/products'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  background-color: #9e9e9e;

  a {
    padding: 1rem;
    margin: 0 1rem;
    text-decoration: none;
    border-bottom: 3px solid #9e9e9e;
  }

  a:visited {
    color: black;
  }

  a:hover {
    border-bottom-color: black;
  }

  a.router-link-exact-active {
    border-bottom-color: black;
  }
}

</style>