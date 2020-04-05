<template>
    <div class="shop">
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <h1>{{ shop.name }}</h1>
                    <v-row>
                        <v-flex
                        v-for="(item, index) in shop.items"
                        v-bind:key="index"
                        xs6 sm6 md4 text-center class="pa-3"
                        >
                        <v-card min-height="400px" class="pa-3">
                            <h4>{{ item.name }}</h4>
                            <img class="item_image" v-bind:src="require('@/assets/shops/' + shop.key + '/items/' + item.image_path)" alt="">
                            <p>{{ item.description }}</p>
                            <p>¥{{ item.price.toLocaleString() }}-</p>
                        </v-card>
                        </v-flex>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
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
}
</script>
<style>
.item_image {
    width: 100%;
}
</style>