<template>
  <main>
    <h1>{{user.name}}'s account</h1>
    <p class="logout-btn" @click="logout()">log out</p>
    <section class="user-details">
      <h2>Personal information</h2>
      <p>
        <strong>Name:</strong>
        {{user.name}}
      </p>
      <p>
        <strong>Email:</strong>
        {{user.email}}
      </p>
      <p>
        <strong>Role:</strong>
        {{user.role}}
      </p>
      <p>
        <strong>City:</strong>
        {{user.adress.city}}
      </p>
      <p>
        <strong>Street:</strong>
        {{user.adress.street}}
      </p>
      <p>
        <strong>Zip:</strong>
        {{user.adress.zip}}
      </p>
    </section>
    <!-- <button @click="logout()">logout</button> -->

    <section class="user-orders">
      <h2>Order history</h2>
      <article v-for="order in orders" :key="order._id">
        <p><strong>Date for purchase: </strong>{{order.timeStamp}}</p>
        <p><strong>Delivery status: </strong>{{order.status}}</p>
        <p><strong>Total sum: </strong>{{order.orderValue}}</p>
        <p v-for="item in order.items" :key="item.id">
          <span><strong>Item id: </strong>{{item}}</span>
        </p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    orders() {
      return this.$store.state.user.orders;
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  min-height: 500px;
  padding: 0 1rem;
  margin: 3rem;

  h1 {
    margin-bottom: 1rem;
  }

  section {
    //border: 1px solid red;
    // max-width: 900px;
    margin: 2rem 0;

    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.15);

    article {
      border: 1px solid black;
      padding: 0.5rem;
      margin: 1.5rem 0;
    }
  }
  .logout-btn {
    max-width: 10rem;
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
</style>