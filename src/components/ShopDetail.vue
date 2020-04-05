<template>
    <div class="shop">
        <div v-on:click="logShop()">log</div>
        {{ shop }}
    </div>
</template>
<script>
import shops from '../data/shops.json'
export default {
    name: "Shop",
    data() {
        return {
            shop: shops[this.$route.params.key]
        }
    },
    methods: {
        logShop: function() {
            //console.log(this.shop)
            //console.log(this.shop)
        }
    },
}
</script>
<style>

</style>