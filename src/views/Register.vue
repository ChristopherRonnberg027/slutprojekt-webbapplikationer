<template>
  <main>
    <h1>Register new</h1>
    <section class="email-info">
      <div class="error" v-if="error">Form is not valid</div>
      <div class="error" v-if="emailInUse">Email already in use</div>
      <div>
        <p>Email</p>
        <input
          name="email"
          @focus="clearBothErrors()"
          :class="emailClasses"
          spellcheck="false"
          v-model="newUser.email"
          type="text"
        />
        <p v-if="emailClasses.invalid">Email must be a valid address, e.g. me@mydomain.com</p>
      </div>
      <div>
        <p>Password</p>
        <input
          name="password"
          @focus="clearError()"
          :class="passwordClasses"
          v-model="newUser.password"
          type="password"
        />
        <p
          v-if="passwordClasses.invalid"
        >Password must be alphanumeric (@, _ and - are also allowed) and 8 - 20 characters</p>
      </div>
      <div>
        <p>Password again</p>
        <input
          name="repeatPassword"
          @focus="clearError()"
          :class="repeatPasswordClasses"
          v-model="newUser.repeatPassword"
          type="password"
        />
        <p v-if="repeatPasswordClasses.invalid">Must match the first password</p>
      </div>
    </section>
    <section class="personal-info">
      <div>
        <p>Name</p>
        <input
          name="name"
          @focus="clearError()"
          :class="nameClasses"
          type="text"
          v-model="newUser.name"
          spellcheck="false"
        />
        <p v-if="nameClasses.invalid">Name must hold only a-ö or spaces and be 2 - 20 characters</p>
      </div>
      <div>
        <p>Street</p>
        <input
          name="street"
          @focus="clearError()"
          :class="streetClasses"
          type="text"
          v-model="newUser.adress.street"
          spellcheck="false"
        />
        <p v-if="streetClasses.invalid">Street must hold only a-ö, spaces or digits and be 2 - 20 characters</p>
      </div>
      <div>
        <p>City</p>
        <input
          name="city"
          @focus="clearError()"
          :class="cityClasses"
          type="text"
          v-model="newUser.adress.city"
          spellcheck="false"
        />
        <p v-if="cityClasses.invalid">City must hold only a-ö or spaces and be 2 - 20 characters</p>
      </div>
      <div>
        <p>Zip</p>
        <input
          name="zip"
          @focus="clearError()"
          :class="zipClasses"
          type="text"
          v-model="newUser.adress.zip"
          spellcheck="false"
        />
        <p v-if="zipClasses.invalid">Zip must hold only digits and spaces and be 2 - 10 characters</p>
      </div>
      <p class="register btn" @click="registerUser()">Register</p>
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
      return this.patterns.email.test(this.newUser.email);
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
    },
    emailClasses() {
      return {
        valid: this.emailIsValid,
        invalid: !this.emailIsValid && this.newUser.email.length
      };
    },
    passwordClasses() {
      return {
        valid: this.passwordIsValid,
        invalid: !this.passwordIsValid && this.newUser.password.length
      };
    },
    repeatPasswordClasses() {
      return {
        valid:
          this.newUser.password === this.newUser.repeatPassword &&
          this.newUser.repeatPassword.length,
        invalid:
          this.newUser.password !== this.newUser.repeatPassword &&
          this.newUser.repeatPassword.length
      };
    },
    nameClasses() {
      return {
        valid: this.nameIsValid,
        invalid: !this.nameIsValid && this.newUser.name.length
      };
    },
    streetClasses() {
      return {
        valid: this.streetIsValid,
        invalid: !this.streetIsValid && this.newUser.adress.street.length
      };
    },
    cityClasses() {
      return {
        valid: this.cityIsValid,
        invalid: !this.cityIsValid && this.newUser.adress.city.length
      };
    },
    zipClasses() {
      return {
        valid: this.zipIsValid,
        invalid: !this.zipIsValid && this.newUser.adress.zip.length
      };
    }
  },
  methods: {
    clearError() {
      this.error = false;
    },
    clearBothErrors() {
      this.emailInUse = false;
      this.error = false;
    },
    async registerUser() {
      if (this.formIsValid) {
        await this.$store.dispatch("register", this.newUser);
        if (this.$store.state.user) {
          this.$router.push({ name: "MyAccount" });
        } else {
          this.emailInUse = true;
          window.scrollTo(0,0);
        }
      } else {
        this.error = true;
        window.scrollTo(0,0);
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

    div {
      margin-top: 2rem;
    }

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
    }
    .register {
      background: #58e0b7;
    }
  }
}
</style>