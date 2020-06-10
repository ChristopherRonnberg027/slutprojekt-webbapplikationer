<template>
  <main>
    <h1>Log in to buy</h1>
    <section>
      <div class="error" v-if="error">Form is not valid</div>
      <div class="error" v-if="wrongEmailPassword">Wrong email or password</div>
      <div>
        <p>Email</p>
        <input
          name="email"
          @focus="clearErrors()"
          :class="emailClasses"
          spellcheck="false"
          v-model="userCredentials.email"
          type="text"
        />
        <p v-if="emailClasses.invalid">Email must be a valid address, e.g. me@mydomain.com</p>
      </div>
      <div>
        <p>Password</p>
        <input
          name="password"
          @focus="clearErrors()"
          :class="passwordClasses"
          v-model="userCredentials.password"
          type="password"
        />
        <p
          v-if="passwordClasses.invalid"
        >Password must be alphanumeric (@, _ and - are also allowed) and 8 - 20 characters</p>
      </div>
      <p class="login btn" @click="submit()">Log in</p>
      <p class="register btn" @click="register()">Register</p>
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
    },
    emailClasses() {
      return {
        valid: this.emailIsValid,
        invalid: !this.emailIsValid && this.userCredentials.email.length
      };
    },
    passwordClasses() {
      return {
        valid: this.passwordIsValid,
        invalid: !this.passwordIsValid && this.userCredentials.password.length
      };
    }
  },
  methods: {
    clearErrors() {
      this.error = false;
      this.wrongEmailPassword = false;
    },
    async submit() {
      if (this.formIsValid) {
        this.error = false;
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
