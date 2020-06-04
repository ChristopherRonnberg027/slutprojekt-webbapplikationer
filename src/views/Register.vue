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
      <input clas="street" type="text" v-model="newUser.street" />
      <p>city</p>
      <input clas="city" type="text" v-model="newUser.city" />
      <p>zip</p>
      <input clas="zip" type="text" v-model="newUser.zip" />
      <button @click="registerUser()" class="registerbtn">register new</button>
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
        adress: {
          street: "",
          city: "",
          zip: ""
        }
      }
    };
  },
  methods: {
    registerUser() {
      console.log("User registered");
      //   this.$router.push(name = "MyAccount");
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
    margin-bottom: 2rem;
    input {
      margin-bottom: 2rem;
    }
  }
  button {
    width: 100%;
    display: block;
  }
}
</style>