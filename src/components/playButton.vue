<template>
  <v-card class="mt-3">
    <v-toolbar flat :color="this.GLOBAL.play_origin_color" dark>
      <v-toolbar-title>
        {{ now_epi }}
      </v-toolbar-title>
    </v-toolbar>

    <v-alert :type="play_URL_DATA.status == 200?'success':'error'" class="ma-4">
      {{play_URL_DATA.status == 200 ? '获取影片播放链接成功！' : '获取影片播放链接失败！'}}
    </v-alert>

    <v-divider></v-divider>

    <v-tabs v-if="play_URL_DATA.type == 'tv'" vertical>
      <v-tab v-for="(n, index) in play_URL_DATA.data" :key="index">
        播放来源 {{  parseInt(index) + 1 }}
      </v-tab>
      <v-tab-item v-for="(n, index) in play_URL_DATA.data" :key="index">
        <v-btn color="primary" class="ma-1" dark v-for="(i, m) in play_URL_DATA.data[index]" :key="i" @click="toPlay(i, parseInt(m) + 1)">
          {{ parseInt(m) + 1 }}
        </v-btn>
      </v-tab-item>
    </v-tabs>
    <v-card-text v-else-if="play_URL_DATA.type == 'movie'">
      <v-btn color="primary" class="ma-1" dark v-for="ls in play_URL_DATA.data" :key="ls.url" @click="toPlay(ls.url, ls.from)">{{ ls.from }}</v-btn>
    </v-card-text>

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
    // 播放地址和播放名称
    toPlay: function (url, name) {
      // 传入父组件
      this.$emit("transfer", url);
      this.now_epi = "正在播放：" + name;
    },
  },
};
</script>
