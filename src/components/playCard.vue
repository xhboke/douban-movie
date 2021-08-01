<template>
  <div>
    <v-card>
      <div v-if="play_url">
        <iframe :src="play_url" frameborder="0" scrolling="no" width="100%" :height="height" allowfullscreen="true"></iframe>
      </div>
      <div v-else>
        <v-img :src="require('../assets/haibao.png')"></v-img>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="ml-1">
        <v-btn id="copy" color="primary" class="ma-1" :data-clipboard-text="play_url" @click="copy">
          {{ copy_tip }}
        </v-btn>

        <v-chip label class="ma-1">
          <v-icon left>
            mdi-thumb-up-outline
          </v-icon>
          <div v-if="rank_douban">
            {{ '豆瓣评分：' + rank_douban }}
          </div>
          <div v-else>
            豆瓣评分：暂无
          </div>
        </v-chip>

        <v-chip v-for="n in chip_genre" v-bind:key="n" class="ma-1" :color="color[Math.round(Math.random() * 3)]" label text-color="white">
          <v-icon left>
            mdi-label
          </v-icon>
          {{ n }}
        </v-chip>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  props: {
    play_url: {
      type: String,
    },
    chip_genre: {
      type: Object,
    },
    rank_douban: {
      type: String,
    },
    intro: {
      type: String,
    },
  },
  data: () => ({
    height: 400,
    color: ["pink", "indigo", "cyan", "teal", "amber"],
    copy_tip: "复制播放链接",
  }),
  created() {
    this.$vuetify.theme.dark = false;
    if (window.innerWidth < 600) {
      this.height = 300;
    } else {
      this.height = 400;
    }
  },
  methods: {
    copy() {
      var clipboard = new Clipboard("#copy");
      clipboard.on("success", () => {
        this.copy_tip = "复制成功！";
      });
      clipboard.on("error", () => {
        this.copy_tip = "复制失败！";
      });
    },
  },
};
</script>
