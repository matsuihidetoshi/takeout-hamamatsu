<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          お店の味を<br>Takeout!
        </h1>

        <p class="subheading font-weight-regular">
          お店とおうちを<br>つなげるサイト
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          使い方
        </h2>
        <div>お店を選ぼう</div>
        <div><router-link to="/shops">一覧</router-link></div>
        <div>⬇︎</div>
        <div>メニューをチェック</div>
        <div>⬇︎</div>
        <div>お店にTEL予約</div>
        <div>⬇︎</div>
        <div>お店に行って受け取ろう！</div>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          大事なページ
        </h2>
        <p class="description">
          <span>浜松市では、新型コロナウイルス</span>
          <span>感染症防止のために各種の</span>
          <span>対策サイトを公開して居ます。</span>
          <span>オープンソースプロジェクトとして</span>
          <span>進行しており、下記リンクより</span>
          <span>開発に貢献していただくことができます。</span>
        </p>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: '浜松市新型コロナウイルス感染症拡大防止サイト',
          href: 'https://stopcovid19-hamamatsu.netlify.com/',
        },
        {
          text: '防止サイトGitHub',
          href: 'https://github.com/code-for-hamamatsu',
        },
        {
          text: 'このサイトのGitHub',
          href: 'https://github.com/matsuihidetoshi/hamamatsu-food-deli',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
<style>
.description span {
  display: inline-block;
}
</style>