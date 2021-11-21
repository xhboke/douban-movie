<template>
  <v-card>
    <snackbar :snackbar="snackbar_open" :text="snackbar_text" />
    <div id="dplayer"></div>
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

      <v-chip v-for="n in chip_genre" v-bind:key="n" class="ma-1" color="teal" label text-color="white">
        <v-icon left>
          mdi-label
        </v-icon>
        {{ n }}
      </v-chip>
    </v-card-actions>
  </v-card>

</template>

<script>
import Clipboard from "clipboard";
import snackbar from "../components/snackbar";
import Hls from "hls.js";
import DPlayer from "dplayer";

export default {
  components: {
    snackbar,
  },
  props: {
    play_url: {
      type: String,
      default: "",
    },
    chip_genre: {
      type: Array,
    },
    rank_douban: {
      type: String,
    },
    intro: {
      type: String,
    },
  },
  data: () => ({
    snackbar_text: "",
    snackbar_open: false,
    copy_tip: "复制播放链接",
    dp: null,
  }),
  mounted() {
    this.loadVideo("");
    this.dp.notice("请选择播放链接", 4000);
    document.querySelector("#dplayer").oncontextmenu = () => {
      document.querySelector(".dplayer-menu").style.display = "none";
      document.querySelector(".dplayer-mask").style.display = "none";
      return false;
    };
  },
  created() {},
  watch: {
    play_url(newval) {
      this.loadVideo(newval);
      if (newval == "" || newval == null || newval == undefined) {
        this.dp.notice("加载失败", 3000);
      } else {
        this.dp.notice("加载成功，点击播放！", 3000);
      }
    },
  },
  methods: {
    open_sncakbar: function (info) {
      this.snackbar_text = info;
      this.snackbar_open = true;
    },
    copy() {
      var clipboard = new Clipboard("#copy");
      clipboard.on("success", () => {
        this.copy_tip = "复制成功！";
      });
      clipboard.on("error", () => {
        this.copy_tip = "复制失败！";
      });
    },
    loadVideo(videoUrl) {
      this.dp = new DPlayer({
        container: document.getElementById("dplayer"),
        autoplay: false,
        theme: "#FADFA3",
        loop: true,
        lang: "zh-cn",
        screenshot: true,
        hotkey: true,
        preload: "auto",
        logo: "https://s3.bmp.ovh/imgs/2021/11/699a4ffdd1c284e8.png",
        volume: 0.7,
        mutex: true,
        video: {
          url: videoUrl,
          type: videoUrl.indexOf(".m3u8") != -1 ? "customHls" : "mp4",
          customType: {
            customHls: function (video) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        },
      });
    },
  },
};
</script>
