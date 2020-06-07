<template>
  <!-- <main>
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
      <button @click="registerUser()" class="registerbtn">register new</button>
    </section>
  </main>-->
  <main>
    <h1 class="ma-5">register user</h1>
    <v-container>
      <v-card class="pa-5">
        <v-form ref="form">
          <v-card-title>login credentials</v-card-title>
          <v-text-field v-model="newUser.email" :rules="rules.emailRules" label="email" />
          <v-text-field
            v-model="newUser.password"
            :rules="rules.passwordRules"
            counter="20"
            label="password"
            spellcheck="false"
          />
          <v-text-field
            v-model="newUser.repeatPassword"
            :rules="rules.passwordRules"
            counter="20"
            label="repeat password"
            spellcheck="false"
          />
          <v-card-title>personal info</v-card-title>
          <v-text-field 
            v-model="newUser.name"
            :rules="rules.lettersSpaces"
            counter="30"
            label="name"
            spellcheck="false" />
          <v-text-field
            v-model="newUser.adress.street"
            label="street"
            spellcheck="false" />
          <v-text-field
            v-model="newUser.adress.city"
            label="city"
            spellcheck="false" />
          <v-text-field
            v-model="newUser.adress.zip"
            label="zip"
            spellcheck="false" />
          <v-btn class="my-5" @click="registerUser()">submit</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        emailRules: [v => /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i.test(v) || "Email must be a valid address, e.g. me@mydomain.com"],
        passwordRules: [v => /^[\w@-]{8,20}$/.test(v) || "Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters"],
        lettersSpaces: [v => /^[a-z ]{2,30}$/i.test(v) || "Letters and spaces only. Between 2 and 30 characters"],
        // lettersNumbersSpaces: [v => /^$/.test(v) || ""],
        // numbers: [v => /^$/.test(v) || ""]
      },
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
    registerUser() {
      this.$store.dispatch("register", this.newUser);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>