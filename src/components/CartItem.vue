<template>
    <article class="container">
        <section class="product-info">
            <h4 class="title">{{cartItem.product.title}}</h4>
            <p class="price">{{cartItem.product.price}} :-</p>
        </section>
        <section class="quantity-btn">
            <p class="btn" @click="addToCart()">&and;</p>
            <p class="quantity">{{cartItem.quantity}}</p>
            <p class="btn" @click="removeFromCart()">&or;</p>
        </section>
    </article>
</template>

<script>
export default {
    name: "CartItem",
    props: {
        cartItem: Object
    },
    methods: {
        addToCart() {
             this.$store.dispatch("addToCart", this.cartItem.product);
        },
        removeFromCart() {
            this.$store.dispatch("removeFromCart", this.cartItem.product);
        }
    }
};
</script>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
        cursor: pointer;
    }
}
</style>