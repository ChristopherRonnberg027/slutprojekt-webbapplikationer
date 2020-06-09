<template>
  <main>
    <h1>log in to buy</h1>
    <section>
      <div>
        <p>email</p>
        <input v-model="userCredentials.email" type="text" />
        <p v-if="!emailIsValid">Email must be a valid address, e.g. me@mydomain.com</p>
      </div>
      <div>
        <p>password</p>
        <input v-model="userCredentials.password" type="text" />
        <p
          v-if="!passwordIsValid"
        >Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
      </div>
      <p class="login" @click="submit()">log in</p>
      <p class="register" @click="register()">register</p>
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
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 4rem 0;
  }

  section {
    padding-bottom: 3rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }

    button {
      display: block;
      width: 100%;
    }

    .register {
      margin-top: 3rem;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      background: #eee;
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
    .login {
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
  }
}
</style>
