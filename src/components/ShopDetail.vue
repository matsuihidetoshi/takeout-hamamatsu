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
                                <img class="image" v-bind:src="require('@/assets/shops/' + shop.key + '/items/' + item.image_path)" alt="">
                                <p>{{ item.description }}</p>
                                <p>¥{{ item.price.toLocaleString() }}-</p>
                            </v-card>
                        </v-flex>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <h4 class="pa-3">{{ shop.name }}</h4>
                        <img class="image pa-3" v-bind:src="require('@/assets/shops/' + shop.key + '/main.jpg')" alt="">
                        <p class="pa-3">{{ shop.description }}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <Footer v-bind:shop="shop" />
    </div>
</template>
<script>
import Footer from './Footer'
import shops from '../data/shops.json'
export default {
    name: "Shop",
    components: {
        Footer
    },
    data() {
        return {
            shop: shops[this.$route.params.key]
        }
    },
}
</script>
<style>
.image {
    width: 100%;
}
.shop {
    margin-bottom: 50px;
}
</style>