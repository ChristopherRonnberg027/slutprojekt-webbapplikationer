<template>
  <main>
    <h1 class="ma-5">log in to buy</h1>
    <v-container>
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="userCredentials.email"
          label="Email"
          prepend-icon="contact_mail">
          </v-text-field>
        <v-text-field
          v-model="userCredentials.password"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="toggleShow()"
          label="Password" prepend-icon="lock">
          </v-text-field>
        <v-btn @click="submit()" :loading="isLoading">Login</v-btn>
      </v-form>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      show1: false,
      userCredentials: {
        email: 'customer@example.com',
        password: 'password'
      }
    }
  },
  methods: {
    toggleShow() {
      this.show1 = !this.show1;
    },
    async submit() {
      this.isLoading = true;
      await this.$store.dispatch('login', this.userCredentials);
      this.isLoading = false;
      if(this.$store.state.user){
        this.$router.push({name: 'MyAccount'});
      }
    },
    register() {
      this.$router.push({name: 'Register'});
    }
  }

}
</script>

<style lang="scss" scoped>

</style>