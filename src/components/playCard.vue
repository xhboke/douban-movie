<template>
  <div>
    <v-card>
      <snackbar :snackbar="snackbar_open" :text="snackbar_text" />
      <div id="dplayer"></div>
      <v-card-actions class="ml-1">
        <v-btn id="copy" color="primary" class="ma-1" :data-clipboard-text="play_url" @click="copy">
          {{ copy_tip }}
        </v-btn>
        <v-btn id="copy" color="primary" class="ma-1" @click="updata">
          {{updata_tip}}
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

    <v-card class="mt-3">
      <v-toolbar flat :color="this.GLOBAL.play_origin_color" dark>
        <v-toolbar-title>
          {{ now_epi }}
        </v-toolbar-title>
      </v-toolbar>

      <v-alert :type="play_URL_DATA.status == 200?'success':'error'" class="ma-4">
        {{play_URL_DATA.status == 200 ? '获取影片播放链接成功！' : '获取影片播放链接失败！'}} <br />
        {{last_epi}}
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
  </div>
</template>

<script>
import Clipboard from "clipboard";
import snackbar from "../components/snackbar";
import Hls from "hls.js";
import DPlayer from "dplayer";
import VueCookies from "vue-cookies";

export default {
  components: {
    snackbar,
  },
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    origin_url: {
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
    play_URL_DATA: {
      type: Object,
    },
  },
  data: () => ({
    snackbar_text: "",
    snackbar_open: false,
    play_url: "",
    copy_tip: "复制播放链接",
    updata_tip: "更新缓存数据",
    now_epi: "播放来源",
    last_epi: "",
    dp: null,
  }),
  mounted() {
    this.loadVideo("");
    this.dp.notice("请选择播放链接", 4000);
    // document.querySelector("#dplayer").oncontextmenu = () => {
    //   document.querySelector(".dplayer-menu").style.display = "none";
    //   document.querySelector(".dplayer-mask").style.display = "none";
    //   return false;
    // };
    if (this.$cookies.isKey(this.id)) {
      this.last_epi =
        "您于【" +
        VueCookies.get(this.id)["time"] +
        "】观看《" +
        VueCookies.get(this.id)["name"] +
        "》的《" +
        VueCookies.get(this.id)["epi"] +
        "》";
    }
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
    updata() {
      this.$parent.loadData(1);
      this.open_sncakbar("更新成功！");
    },
    // 保存播放信息
    savePlayInfo(id, name, epi) {
      var time = "";
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      time = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;

      if (this.$cookies.isKey(id)) {
        this.$cookies.remove(id);
        this.$cookies.set(id, { time: time, name: name, epi: epi }, "3y");
      } else {
        this.$cookies.set(id, { time: time, name: name, epi: epi }, "3y");
      }
    },
    // 播放地址和播放名称
    toPlay: function (url, name) {
      this.GLOBAL.api.getApi(url).then((res) => {
        var play_url = res.data.url;
        this.now_epi = "正在播放：" + name;
        this.loadVideo(play_url);
        if (play_url == "" || play_url == null || play_url == undefined) {
          this.dp.notice("加载失败，请重新选择播放来源", 3000);
        } else {
          this.savePlayInfo(this.id, this.name, name);
          console.log(VueCookies.get(this.id));
          this.dp.notice("加载【" + name + "】成功，点击播放！", 4000);
        }
        this.play_url = play_url;
      });
    },
    loadVideo(videoUrl) {
      this.dp = new DPlayer({
        container: document.getElementById("dplayer"),
        autoplay: false,
        theme: "#3F51B5",
        lang: "zh-cn",
        screenshot: true,
        hotkey: true,
        preload: "auto",
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
        danmaku: {
          id: this.$route.params.id,
          api: "https://dplayer.moerats.com/",
          bottom: "15%",
        },
        contextmenu: [
          {
            text: "苍穹影视",
            link: "https://github.com/xhboke",
          },
        ],
      });
    },
  },
};
</script>
