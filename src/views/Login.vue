<template>
  <main>
    <h1>log in to buy</h1>
    <section>
      <div>
        <p>email</p>
        <input spellcheck="false" v-model="userCredentials.email" type="text" />
        <p v-if="!emailIsValid">Email must be a valid address, e.g. me@mydomain.com</p>
      </div>
      <div>
        <p>password</p>
        <input spellcheck="false" v-model="userCredentials.password" type="password" />
        <p
          v-if="!passwordIsValid"
        >Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
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
      userCredentials: {
        email: "customer@example.com",
        password: "password"
      }
    };
  },
  computed: {
    emailIsValid() {
      return /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i.test(
        this.userCredentials.email
      );
    },
    passwordIsValid() {
      return /^[\w@-]{8,20}$/.test(this.userCredentials.password);
    },
    formIsValid() {
      return this.emailIsValid && this.passwordIsValid;
    }
  },
  methods: {
    async submit() {
      if (this.formIsValid) {
        await this.$store.dispatch("login", this.userCredentials);
        if (this.$store.state.user) {
          await this.$store.dispatch("getOrders");
          this.$router.push({ name: "MyAccount" });
        } else {
          console.log('wrong email or password');
        }
      } else {
        console.log("form is not valid");
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

    div {
      margin-top: 2rem;
      input {
        border: none;
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem;
        outline: none;
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
