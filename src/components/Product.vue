<template>
    <article class="product">
        <router-link :to="'/products/'+product._id" class="image-container">
            <img :src="require('@/assets/'+product.imgFile)" alt />
        </router-link>

        <div class="product-info">
            <div class="title-price">
                <p class="title">{{product.title}}</p>
                <p class="price">{{product.price}} kr</p>
            </div>
            <div class="desc-buy">
                <p class="short-desc">{{product.shortDesc}}</p>
                <p class="buy" @click="addToCart">Add to Cart</p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: "Product",
    props: {
        product: Object
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addToCart", this.product);
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin flex-column {
    display: flex;
    flex-direction: column;
}
@mixin flex-row {
    display: flex;
    justify-content: space-between;
}
@mixin flex-row-end {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.product {
    font-size: 1.4rem;
    @include flex-column;
    .image-container {
        border-radius: 5px;
        background-color: #c4c4c4;
        padding: 1rem 2rem 0;
        @include flex-row-end;
        min-height: 21rem;

        img {
            object-fit: cover;
            width: 18rem;
        }
    }
    .product-info {
        @include flex-column;
        .title-price,
        .desc-buy {
            @include flex-row;
            .buy {
                background: #58e0b7;
                border: 1px solid #000000;
                padding: 0 1rem;
                border-radius: 5px;
                &:hover {
                    cursor: pointer;
                    background: cornflowerblue;
                }
            }
        }
        .title,
        .buy {
            font-weight: bold;
        }
    }
}
</style>