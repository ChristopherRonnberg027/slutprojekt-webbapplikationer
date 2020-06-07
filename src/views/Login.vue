<template>
  <main>
    <h1 class="ma-5">log in to buy</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="8" lg="6">
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="userCredentials.email"
              :rules="emailRules"
              label="Email"
              prepend-icon="contact_mail"
              spellcheck="false"
            ></v-text-field>
            <v-text-field
              v-model="userCredentials.password"
              :rules="passwordRules"
              label="Password"
              prepend-icon="lock"
              spellcheck="false"
              @click:append="toggleShow()"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
            ></v-text-field>
            <v-btn @click="submit()" :loading="isLoading">Login</v-btn>
            <v-btn class="mx-3" @click="register()">Register</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      emailRules: [
        v =>
          /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i.test(v) ||
          "Email must be a valid address, e.g. me@mydomain.com"
      ],
      passwordRules: [
        v =>
          /^[\w@-]{8,20}$/.test(v) ||
          "Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters"
      ],
      isLoading: false,
      show1: false,
      userCredentials: {
        email: "customer@example.com",
        password: "password"
      }
    };
  },
  methods: {
    toggleShow() {
      this.show1 = !this.show1;
    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        await this.$store.dispatch("login", this.userCredentials);
        this.isLoading = false;
        if (this.$store.state.user) {
          await this.$store.dispatch("getOrders");
          this.$router.push({ name: "MyAccount" });
        }
      }
    },
    register() {
      this.$router.push({ name: "Register" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>