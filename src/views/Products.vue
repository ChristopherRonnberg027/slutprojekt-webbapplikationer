<template>
    <main class="products">
        <h1>CHECK OUT OUR PRODUCTS</h1>
        <section class="product-list">
            <product
                v-for="(singleProduct,i) in productList"
                v-bind:key="i"
                v-bind:product="singleProduct"
            />
        </section>
    </main>
</template>

<script>
import products from "@/assets/products.json";
import Product from "@/components/Product";
export default {
    name: "Products",
    components: {
        Product
    },
    data() {
        return {
            productList: products
        };
    }
};
</script>

<style lang="scss" scoped>
.products {
    h1 {
        text-align: center;
    }
    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        gap: 3rem;
        margin: 1rem;
    }
}
</style>