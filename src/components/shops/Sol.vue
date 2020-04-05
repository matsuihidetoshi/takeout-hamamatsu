<template>
    <div id="sol">
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <h1>{{ shop.name }}</h1>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Sol',
    data () {
        return {
            shop:
            {
                key: "sol",
                name: "スパニッシュイタリアン酒場 SOL ソル",
            }
        }
    }
}
</script>
<style>

</style>