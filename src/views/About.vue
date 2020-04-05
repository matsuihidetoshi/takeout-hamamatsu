<template>
  <div class="about">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>このサイトについて</h1>
          <v-card class="pa-3">
            <p class="description">
              <span>浜松市の有志のエンジニアによって、</span>
              <span>開発・保守されて居ます。</span>
              <span>下記のGitHubのリポジトリに対して</span>
              <span>issueやpull requestを</span>
              <span>追加していただくことで開発に</span>
              <span>貢献していただくことができます。</span>
            </p>
            <a href="https://github.com/matsuihidetoshi/takeout-hamamatsu" target="_blank">GitHub</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.description > span {
  display: inline-block;
}
</style>
