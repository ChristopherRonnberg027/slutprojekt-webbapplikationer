<template>
  <main>
    <h1>register new</h1>
    <section class="email-info">
      <div class="error" v-if="error">Form is not valid</div>
      <div class="error" v-if="emailInUse">Email already in use</div>
      <p>email</p>
      <input
        name="email"
        @input="inputHandler($event)"
        spellcheck="false"
        v-model="newUser.email"
        type="text"
      />
      <p>Email must be a valid address, e.g. me@mydomain.com</p>
      <p>password</p>
      <input
        name="password"
        @input="inputHandler($event)"
        v-model="newUser.password"
        type="password"
      />
      <p>Password must be alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
      <p>password again</p>
      <input
        name="repeatPassword"
        @input="inputHandler($event)"
        v-model="newUser.repeatPassword"
        type="password"
      />
      <p>Must match the first password</p>
    </section>
    <section class="personal-info">
      <p>name</p>
      <input
        name="name"
        @input="inputHandler($event)"
        type="text"
        v-model="newUser.name"
        spellcheck="false"
      />
      <p>Name must hold only a-ö or spaces and be 2 - 20 characters</p>
      <p>street</p>
      <input
        name="street"
        @input="inputHandler($event)"
        type="text"
        v-model="newUser.adress.street"
        spellcheck="false"
      />
      <p>Street must hold only a-ö, spaces or digits and be 2 - 20 characters</p>
      <p>city</p>
      <input
        name="city"
        @input="inputHandler($event)"
        type="text"
        v-model="newUser.adress.city"
        spellcheck="false"
      />
      <p>City must hold only a-ö or spaces and be 2 - 20 characters</p>
      <p>zip</p>
      <input
        name="zip"
        @input="inputHandler($event)"
        type="text"
        v-model="newUser.adress.zip"
        spellcheck="false"
      />
      <p>Zip must hold only digits and spaces and be 2 - 10 characters</p>
      <p class="register btn" @click="registerUser()">register</p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      emailInUse: false,
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
      },
      patterns: {
        email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
        password: /^[\w@-]{8,20}$/,
        name: /^[a-ö ]{2,20}$/i,
        street: /^[a-ö\d ]{2,20}$/i,
        city: /^[a-ö ]{2,20}$/i,
        zip: /^[\d ]{2,10}$/
      }
    };
  },
  computed: {
    emailIsValid() {
      return this.patterns.email.test(
        this.newUser.email
      );
    },
    passwordIsValid() {
      return this.patterns.password.test(this.newUser.password);
    },
    repeatPasswordIsValid() {
      return this.newUser.password == this.newUser.repeatPassword;
    },
    nameIsValid() {
      return this.patterns.name.test(this.newUser.name);
    },
    streetIsValid() {
      return this.patterns.street.test(this.newUser.adress.street);
    },
    cityIsValid() {
      return this.patterns.city.test(this.newUser.adress.city);
    },
    zipIsValid() {
      return this.patterns.zip.test(this.newUser.adress.zip);
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
    inputHandler(e) {
      if (this.formIsValid && this.error) {
        this.error = false;
      }
      if (e.target.attributes.name.value === 'email') {
        this.emailInUse = false;
      }
      if (e.target.attributes.name.value === 'repeatPassword') {
        this.validateRepeatPassword(e.target);
      } else {
        this.validate(e.target, this.patterns[e.target.attributes.name.value]);
      }
    },
    validate(field, regex) {
      if (regex.test(field.value)) {
        field.classList.add("valid");
        field.classList.remove("invalid");
      } else {
        field.classList.remove("valid");
        field.classList.add("invalid");
      }
    },
    validateRepeatPassword(field) {
      if (this.newUser.repeatPassword === this.newUser.password) {
        field.classList.add('valid');
        field.classList.remove('invalid');
      } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
      }
    },
    async registerUser() {
      if (this.formIsValid) {
        await this.$store.dispatch("register", this.newUser);
        if (this.$store.state.user) {
          this.$router.push({ name: "MyAccount" });
        } else {
          this.emailInUse = true;
        }
      } else {
        this.error = true;
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

    .error {
      text-align: center;
      margin: 0.5rem;
      padding: 0.4rem;
      border: 1px solid crimson;
      color: crimson;
      font-weight: 700;
    }

    input {
      border: 2px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem;
      outline: none;
    }
    .valid {
      border-color: #58e0b7;
    }
    .invalid {
      border-color: orange;
    }
    input + p {
      font-family: arial;
      font-size: 0.9em;
      font-weight: bold;
      text-align: center;
      margin: 0 10px 20px 10px;
      color: rgb(235, 152, 0);
      display: none;
    }
    input.invalid + p {
      display: block;
    }
    .register {
      background: #58e0b7;
    }
  }
}
</style>