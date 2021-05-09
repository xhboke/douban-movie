<template>
  <v-card class="mt-3">
    <v-toolbar flat :color="this.GLOBAL.play_origin_color" dark>
      <v-toolbar-title>
        {{ now_epi }}
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text v-if="play_URL_DATA.status == 1">暂无播放来源</v-card-text>
    <v-tabs v-else-if="play_URL_DATA.type == 'tv'" vertical>
      <v-tab v-for="(n, index) in play_URL_DATA.data" :key="index">
        播放来源 {{ parseInt(index) + 1 }}
      </v-tab>

      <v-tab-item v-for="(n, index) in play_URL_DATA.data" :key="index">
        <v-btn
          color="primary"
          class="ma-1"
          dark
          v-for="(i, m) in play_URL_DATA.data[index]"
          :key="i"
          @click="toPlay(i, parseInt(m) + 1)"
        >
          {{ parseInt(m) + 1 }}
        </v-btn>
      </v-tab-item>
    </v-tabs>
    <v-card-text v-else-if="play_URL_DATA.type == 'movie'">
      <v-btn
        color="primary"
        class="ma-1"
        dark
        v-for="ls in play_URL_DATA.data"
        :key="ls.url"
        @click="toPlay(ls.url, ls.from)"
        >{{ ls.from }}</v-btn
      >
    </v-card-text>
    <v-card-text v-else>未知错误~</v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    play_URL_DATA: {
      type: Object,
    },
  },
  data() {
    return {
      now_epi: "播放来源",
    };
  },
  methods: {
    toPlay: function (url, index) {
      this.$router.push("/subject/" + this.$route.params.id + "/" + url);
      this.now_epi = "正在播放：" + index;
    },
  },
};
</script>
