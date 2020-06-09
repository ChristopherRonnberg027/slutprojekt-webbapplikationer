<template>
  <main>
    <h1>register new</h1>
    <section class="email-info">
      <p>email</p>
      <input class="email" type="text" v-model="newUser.email" spellcheck="false" />
      <p class="errmess" v-if="!emailIsValid">Email must be a valid address, e.g. me@mydomain.com</p>
      <p>password</p>
      <input class="password" type="password" v-model="newUser.password" />
      <p class="errmess" v-if="!passwordIsValid">Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
      <p>password again</p>
      <input class="password" type="password" v-model="newUser.repeatPassword" />
      <p class="errmess" v-if="!repeatPasswordIsValid">Must match the first password</p>
    </section>
    <section class="personal-info">
      <p>name</p>
      <input clas="name" type="text" v-model="newUser.name" spellcheck="false" />
      <p class="errmess" v-if="!nameIsValid">Name must hold only a-z or spaces and be 2 - 20 characters</p>
      <p>street</p>
      <input clas="street" type="text" v-model="newUser.adress.street" spellcheck="false" />
      <p class="errmess" v-if="!streetIsValid">Street must hold only a-z, spaces or digits and be 2 - 20 characters</p>
      <p>city</p>
      <input clas="city" type="text" v-model="newUser.adress.city" spellcheck="false" />
      <p class="errmess" v-if="!cityIsValid">City must hold only a-z or spaces and be 2 - 20 characters</p>
      <p>zip</p>
      <input clas="zip" type="text" v-model="newUser.adress.zip" spellcheck="false" />
      <p class="errmess" v-if="!zipIsValid">Zip must hold only digits and spaces and be 2 - 10 characters</p>
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
  computed: {
    emailIsValid() {
      return /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i.test(
        this.newUser.email
      );
    },
    passwordIsValid() {
      return /^[\w@-]{8,20}$/.test(this.newUser.password);
    },
    repeatPasswordIsValid() {
      return this.newUser.password == this.newUser.repeatPassword;
    },
    nameIsValid() {
      return /^[a-z ]{2,20}/i.test(this.newUser.name);
    },
    streetIsValid() {
      return /^[a-z\d ]{2,20}$/i.test(this.newUser.adress.street);
    },
    cityIsValid() {
      return /^[a-z ]{2,20}$/i.test(this.newUser.adress.city);
    },
    zipIsValid() {
      return /^[\d ]{2,10}$/.test(this.newUser.adress.zip);
    },
    formIsValid() {
      return (
        this.emailIsValid &&
        this.passwordIsValid &&
        this.repeatPasswordIsValid &&
        this.nameIsValid &&
        this.streetIsValid &&
        this.cityIsValid &&
        this.zipIsValid
      );
    }
  },
  methods: {
    async registerUser() {
      if (this.formIsValid) {
        await this.$store.dispatch("register", this.newUser);
        this.$router.push({ name: "MyAccount" });
      } else {
        console.log("form is not valid");
      }
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

    .errmess {
      color: rgb(255, 0, 0);
      font-size: 0.9rem;
    }

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