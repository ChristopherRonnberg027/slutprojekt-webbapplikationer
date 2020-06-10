<template>
  <main>
    <h1>log in to buy</h1>
    <section>
      <div class="error" v-if="error">Form is not valid</div>
      <div class="error" v-if="wrongEmailPassword">Wrong email or password</div>
      <div>
        <p>email</p>
        <input
          name="email"
          @input="inputHandler($event)"
          spellcheck="false"
          v-model="userCredentials.email"
          type="text"
        />
        <p>Email must be a valid address, e.g. me@mydomain.com</p>
      </div>
      <div>
        <p>password</p>
        <input
          name="password"
          @input="inputHandler($event)"
          spellcheck="false"
          v-model="userCredentials.password"
          type="password"
        />
        <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
      </div>
      <p class="login btn" @click="submit()">log in</p>
      <p class="register btn" @click="register()">register</p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      wrongEmailPassword: false,
      patterns: {
        email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
        password: /^[\w@-]{8,20}$/
      },
      userCredentials: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    emailIsValid() {
      return this.patterns.email.test(this.userCredentials.email);
    },
    passwordIsValid() {
      return this.patterns.password.test(this.userCredentials.password);
    },
    formIsValid() {
      return this.emailIsValid && this.passwordIsValid;
    }
  },
  methods: {
    inputHandler(e) {
      if (this.formIsValid && this.error) {
        this.error = false;
      }
      this.wrongEmailPassword = false;
      this.validate(e.target, this.patterns[e.target.attributes.name.value]);
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
    async submit() {
      if (this.formIsValid) {
        await this.$store.dispatch("login", this.userCredentials);
        if (this.$store.state.user) {
          await this.$store.dispatch("getOrders");
          this.$router.push({ name: "MyAccount" });
        } else {
          this.wrongEmailPassword = true;
        }
      } else {
        this.error = true;
      }
    },
    register() {
      this.$router.push({ name: "Register" });
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

    div {
      margin-top: 2rem;
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
    }
    .register {
      background: #eee;
    }
    .login {
      background: #58e0b7;
    }
  }
}
</style>
