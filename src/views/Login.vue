<template>
  <main>
    <h1>log in to buy</h1>
    <section>
      <p>email</p>
      <input v-model="userCredentials.email" type="text" />
      <p>password</p>
      <input v-model="userCredentials.password" type="text" />
      <!-- <button @click="submit()">log in</button> -->
      <p class="login" @click="submit()">log in</p>
      <!-- <button @click="register()" class="register">register</button> -->
      <p class="register" @click="register()">register</p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userCredentials: {
        email: "customer@example.com",
        password: "password"
      }
    };
  },
  methods: {
    async submit() {
      await this.$store.dispatch("login", this.userCredentials);
      if (this.$store.state.user) {
        this.$router.push({ name: "MyAccount" });
      }
    },
    register() {
      this.$router.push({ name: "Register" });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 4rem 0;
  }

  section {
    padding-bottom: 3rem;
    input {
      margin-bottom: 2rem;
    }

    button {
      display: block;
      width: 100%;
    }

    .register {
      margin-top: 3rem;
      text-align: center;
      font-size: 0.8rem;
      background: #eee;
      border: 2px solid #000000;
      padding: 0rem 0.5rem;
      &:hover {
        cursor: pointer;
        background: cornflowerblue;
      }
    }
    .login {
      text-align: center;
      font-size: 0.8rem;
      background: #58e0b7;
      border: 2px solid #000000;
      padding: 0rem 0.5rem;
      &:hover {
        cursor: pointer;
        background: cornflowerblue;
      }
    }
  }
}
</style>