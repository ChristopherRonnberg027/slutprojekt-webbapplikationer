<template>
    <article class="product">
        <div @click.once="toSingleProduct()" :class="['image-container',{'single-product':singleProduct}]">
            <img :src="require('@/assets/'+product.imgFile)" alt />
        </div>

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
        product: Object,
        singleProduct:Boolean
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addToCart", this.product);
        },
        async toSingleProduct(){
            await this.$store.dispatch("getProduct", this.product._id);
            this.$router.push('/products/'+this.product._id)
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
    font-size: 1rem;
    @include flex-column;

    .image-container {
        //border-radius: 5px;
        background-color: #e6e6e6;
        padding: 1rem 2rem 0;
        @include flex-row-end;
        min-height: 21rem;
        &:hover{
            cursor: pointer;
        }

        img {
            object-fit: cover;
            width: 18rem;
        }
    }    
    .single-product{
        pointer-events: none;
        min-height: 30vw;
        // max-height: 30rem;
        img {
            max-width: 27rem;
            width: 100%;
        }
    }
    .product-info {
        padding-top: 0.5rem;
        @include flex-column;
        .title-price,
        .desc-buy {
            @include flex-row;
            .buy {
                font-size: .8rem;
                background: none;
                // background: #58e0b7;
                border: 2px solid #000000;
                //padding: 0 1rem;
                //border-radius: 10px;
                padding:0rem 0.5rem;
                &:hover {
                    cursor: pointer;
                    //background: cornflowerblue;
                    background: #58e0b7;
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