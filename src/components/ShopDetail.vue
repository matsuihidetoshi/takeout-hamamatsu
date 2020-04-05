<template>
    <div class="shop">
        <div v-on:click="logShop()">log</div>
    </div>
</template>
<script>
export default {
    name: "Shop",
    methods: {
        logShop: function() {
            console.log(this.$store.state.shop)
        }
    }
}
</script>
<style>

</style>