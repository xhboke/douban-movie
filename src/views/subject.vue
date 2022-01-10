<template>
  <div>
    <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-3 pt-3 pb-3" v-if="!flag">
      <v-skeleton-loader type="card" class="mt-3"></v-skeleton-loader>
      <v-skeleton-loader type="card-heading" class="mt-3"></v-skeleton-loader>
      <v-skeleton-loader type="list-item-avatar-three-line" class="mt-3" v-for="n in 3" :key="n"></v-skeleton-loader>
    </v-sheet>

    <div v-if="flag">
      <playCard :origin_url="play_url" :id="infoData.Id" :name="infoData.Name" :chip_genre="infoData.Genre" :rank_douban="String(infoData.Rating)" :play_URL_DATA="infoData.EpisodeUrl" />
      <PlayIntro :info="infoData" />
      <PlayComment :play_REVIEW_Id="infoData.Id" />
    </div>
  </div>
</template>
<script>
import playCard from "../components/playCard";
import PlayIntro from "../components/playIntro";
import PlayComment from "../components/playComment";

export default {
  inject: ["theme"],
  components: {
    playCard,
    PlayIntro,
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
    this.loadData();
  },
  methods: {
    change_site_title: function (site_title) {
      document.title = site_title + " - " + this.GLOBAL.sitename;
    },
    change_bar_title: function (bar_title) {
      this.$root.bartitle = bar_title;
    },
    loadData(flag = 0) {
      this.GLOBAL.api.info(this.$route.params.id, flag).then((res) => {
        if (res.data.Name) {
          this.id = this.$route.params.id;
          this.infoData = res.data;
          this.change_site_title(this.infoData.ChineseName);
          this.change_bar_title(
            this.infoData.Name + "(" + this.infoData.Year + ")"
          );
          this.flag = true;
        } else {
          alert("加载数据失败！");
          this.flag = true;
        }
      });
    },
  },
};
</script>
