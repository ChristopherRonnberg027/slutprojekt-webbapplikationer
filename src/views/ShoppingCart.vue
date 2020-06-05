<template>
    <main>
        <h1>Shopping Cart</h1>
        <cart-item v-for="cartItem in cart" :key="cartItem.product._id" :cartItem="cartItem" />
        <h2>Total: {{total}}</h2>
        <button @click="createOrder" class="purchase">Checkout</button>
    </main>
</template>

<script>
import CartItem from "@/components/CartItem";
export default {
    name: "ShoppingCart",
    components: {
        CartItem
    },
    data() {
        return {
            items: []
        };
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        total() {
            return this.$store.getters.cartTotalPrice;
        }
    },
    methods: {
        createOrder() {
            if (this.$store.state.user) {
                for (const cartItem of this.cart) {
                    for (let i = 0; i < cartItem.quantity; i++) {
                        this.items.push(cartItem.product._id);
                    }
                }
                this.$store.dispatch("createOrder", { items: this.items });
                this.$router.push("/checkout");
            } else {
              this.$router.push("/login");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.purchase {
    background: #83fbe5;
    border: 2px solid #000000;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 0 1rem;
}
</style>