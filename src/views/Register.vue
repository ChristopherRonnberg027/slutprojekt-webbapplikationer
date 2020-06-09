<template>
  <main>
    <h1>register new</h1>
    <section class="email-info">
      <p>email</p>
      <input class="email" type="text" v-model="newUser.email" />
      <p>password</p>
      <input class="password" type="text" v-model="newUser.password" />
      <p>password again</p>
      <input class="password" type="text" v-model="newUser.repeatPassword" />
    </section>
    <section class="personal-info">
      <p>name</p>
      <input clas="name" type="text" v-model="newUser.name" />
      <p>street</p>
      <input clas="street" type="text" v-model="newUser.adress.street" />
      <p>city</p>
      <input clas="city" type="text" v-model="newUser.adress.city" />
      <p>zip</p>
      <input clas="zip" type="text" v-model="newUser.adress.zip" />
      <p class="register" @click="registerUser()">register</p>
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
      this.$router.push({name: 'MyAccount'});
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  //margin: 0 auto;
  //max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // display: grid;

  h1 {
    margin: 4rem 0;
  }
  section {
    background-color: rgba(0, 0, 0, 0.15);
    display: grid;
    margin-bottom: 2rem;
    padding: 2rem;
    input {
      margin-bottom: 1rem;
      border-radius: 0;
      border: 1px solid black;
    }
    .register {
      margin-top: 3rem;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      background: #58e0b7;
      border: 2px solid #000000;
      padding: 0rem 1rem;
      &:hover {
        cursor: pointer;
        background: cornflowerblue;
      }
      &:active {
        transform: scale(0.98);
      }
      &:focus {
        outline: none;
      }
    }
    p {
      font-weight: 500;
    }
  }

  // button {
  //   width: 100%;
  //   display: block;
  // }
}
</style>