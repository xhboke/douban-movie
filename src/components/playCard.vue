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
    this.loadVideo(this.play_url);
  },
  created() {},
  watch: {
    play_url(newval) {
      console.log("changeVideoUrl: " + newval);
      this.loadVideo(newval);
      if (newval == "" || newval == null || newval == undefined) {
        this.snackbar_text = "";
        this.open_sncakbar("Error");
      } else {
        this.snackbar_text = "";
        this.open_sncakbar("Success");
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
