<template>
  <div class="shops">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>お店一覧</h1>
            <v-row>
              <v-flex
              v-for="(shop, index) in shops"
              v-bind:key="index"
              xs6 sm6 md4 text-center class="pa-3"
            >
              <v-card min-height="200px" class="pa-3">
                <router-link to="/shop" @click.native="setShop(shop.key)">
                    <h3>{{ shop.name }}</h3>
                    <img class="thumbnail" v-bind:src="require('@/assets/shops/' + shop.key + '/thumbnail.jpg')" alt="">
                </router-link>
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
    name: 'ShopIndex',
    data () {
        return {
            shops: shops
        }
    },
    methods: {
      setShop: function(key) {
        this.$store.state.shop = key
      }
    }
}
</script>
<style>
.thumbnail {
    max-width: 100%;
}
</style>
    