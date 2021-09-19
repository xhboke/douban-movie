<template>
  <div>
    <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-3 pt-3 pb-3" v-if="!flag">
      <v-skeleton-loader type="card" class="mt-3"></v-skeleton-loader>
      <v-skeleton-loader type="card-heading" class="mt-3"></v-skeleton-loader>
      <v-skeleton-loader type="list-item-avatar-three-line" class="mt-3" v-for="n in 3" :key="n"></v-skeleton-loader>
    </v-sheet>

    <div v-if="flag">
      <playCard :play_url="play_url" :chip_genre="infoData.Genre" :rank_douban="String(infoData.Rating)" />

      <PlayIntro :info="infoData" />
      <PlayButton :play_URL_DATA="infoData.EpisodeUrl" v-if="infoData.EpisodeUrl" />
      <PlayComment :play_REVIEW_Id="infoData.Id" />
    </div>
  </div>
</template>
<script>
import playCard from "../components/playCard";
import PlayIntro from "../components/playIntro";
import PlayButton from "../components/playButton";
import PlayComment from "../components/playComment";

export default {
  inject: ["theme"],
  components: {
    playCard,
    PlayIntro,
    PlayButton,
    PlayComment,
  },
  data() {
    return {
      flag: false,
      id: 0,
      infoData: [],
      play_url: "",
    };
  },
  created() {
    this.chushihua();
  },
  methods: {
    play: function () {
      this.play_url = this.GLOBAL.api.getApi() + this.$route.params.url;
    },
    chushihua: function () {
      if (this.$route.params.id) {
        // 是否需要播放，默认需要
        if (this.$cookies.get("is_open_play") == 0) {
          var _is_accurate = false;
        } else {
          _is_accurate = true;
        }
        this.GLOBAL.api
          .info(this.$route.params.id, _is_accurate)
          .then((res) => {
            if (res.data.Name) {
              this.id = this.$route.params.id;
              this.infoData = res.data;
              this.change_site_title(this.infoData.Name);
              this.change_bar_title(this.infoData.Name);
              this.flag = true;
            } else {
              this.$router.push("/404");
            }

            if (this.$route.params.url) {
              this.play();
            }
          });
      }
    },
    change_site_title: function (site_title) {
      document.title = site_title + " - " + this.GLOBAL.sitename;
    },
    change_bar_title: function (bar_title) {
      this.$root.bartitle = bar_title;
    },
  },
  watch: {
    "$route.path": function (newVal, oldVal) {
      if (newVal.startsWith(oldVal)) {
        console.log(this.$route.params.url);
        this.play_url = this.GLOBAL.api.getApi() + this.$route.params.url;
      } else {
        this.play();
      }
    },
  },
};
</script>
