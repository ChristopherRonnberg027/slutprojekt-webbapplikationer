<template>
  <main>
    <h1>register new</h1>
    <section class="email-info">
      <p>email</p>
      <input class="email" type="text" v-model="newUser.email" spellcheck="false" />
      <p>password</p>
      <input class="password" type="password" v-model="newUser.password" />
      <p>password again</p>
      <input class="password" type="password" v-model="newUser.repeatPassword" />
    </section>
    <section class="personal-info">
      <p>name</p>
      <input clas="name" type="text" v-model="newUser.name" spellcheck="false" />
      <p>street</p>
      <input clas="street" type="text" v-model="newUser.adress.street" spellcheck="false" />
      <p>city</p>
      <input clas="city" type="text" v-model="newUser.adress.city" spellcheck="false" />
      <p>zip</p>
      <input clas="zip" type="text" v-model="newUser.adress.zip" spellcheck="false" />
      <p class="register btn" @click="registerUser()">register</p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        repeatPassword: "",
        name: "",
        adress: {
          street: "",
          city: "",
          zip: ""
        }
      }
    };
  },
  methods: {
    async registerUser() {
      await this.$store.dispatch("register", this.newUser);
      this.$router.push({ name: "MyAccount" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/button-style.scss";
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 4rem 0;
  }
  section {
    background-color: rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 600px;
    padding: 3rem;
    margin-bottom: 3rem;

    input {
      border: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem;
      outline: none;
    }
    .register {
      background: #58e0b7;
    }
  }
}
</style>