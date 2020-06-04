<template>
    <main class="single-product">
        <h1>singleproduct view</h1>
        <product :product="product" singleProduct/>
        <h2>{{product.category}}</h2>
        <p>{{product.longDesc}}</p>
    </main>
</template>

<script>
import Product from "@/components/Product";
export default {
    name: "SingeProduct",
    components: {
        Product
    },
    data() {
        return {
            product: { //temporary change when store is done
                _id:343234,
                title: "Tricky",
                price: 799,
                shortDesc: "Unisex",
                category: "board",
                longDesc:
                    "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
                imgFile: "skateboard-generic.png",
                serial: "231874871397182"
            }
        };
    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
.single-product {
    margin-top: 5rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 40vw;
}
</style>