<template>
  <div class="shops">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>お店一覧</h1>
          <div v-for="(shop, index) in shops" v-bind:key="index">
              <router-link v-bind:to="'/shops/' + shop.key">
                  <h3>{{ shop.name }}</h3>
                  <img class="thumbnail" v-bind:src="require('@/assets/shops/' + shop.key + '/thumbnail.jpg')" alt="">
              </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
    name: 'ShopIndex',
    data () {
        return {
            shops: [
                {
                    key: "sol",
                    name: "スパニッシュイタリアン酒場 SOL ソル",
                }
            ]
        }
    }
}
</script>
<style>
.thumbnail {
    max-width: 100%;
}
</style>
    