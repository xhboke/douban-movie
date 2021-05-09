<template>
  <div>
    <Carousel />
    <div class="text-h5 mt-6 subtitle">正在上映</div>
    <v-row v-if="now_data">
      <cardItem
        :id="n.id"
        :name="n.name"
        :img="n.image"
        :is_bofang="false"
        :is_new="true"
        :rank="n.rating"
        v-for="n in now_data"
        :key="n.id"
      />
    </v-row>

    <div class="text-h5 mt-6 subtitle">热门电影</div>
    <v-row v-if="movie_data">
      <cardItem
        :id="n.id"
        :name="n.title"
        :img="n.cover"
        :is_bofang="n.playable"
        :is_new="n.is_new"
        :rank="n.rate"
        v-for="n in movie_data"
        :key="n.id"
      />
    </v-row>

    <div class="text-h5 mt-6 subtitle">热门电视剧</div>
    <v-row v-if="movie_data">
      <cardItem
        :id="n.id"
        :name="n.title"
        :img="n.cover"
        :is_bofang="n.playable"
        :is_new="n.is_new"
        :rank="n.rate"
        v-for="n in tv_data"
        :key="n.id"
      />
    </v-row>
  </div>
</template>
<script>
import Carousel from "../components/carousel";
import cardItem from "../components/cardItem";
export default {
  components: {
    Carousel,
    cardItem,
  },
  data() {
    return {
      now_data: [],
      movie_data: [],
      tv_data: [],
    };
  },
  created() {
    document.title = "首页 - " + this.GLOBAL.sitename;
    this.$root.bartitle = "首页";
    this.GLOBAL.api.now_playing().then((res) => {
      this.now_data = res.data;
    });
    this.GLOBAL.api.index_movie().then((res) => {
      this.movie_data = res.data.subjects;
    });
    this.GLOBAL.api.index_tv().then((res) => {
      this.tv_data = res.data.subjects;
    });
  },
};
</script>
<style scoped>
.subtitle:before {
  content: "# ";
  color: #ff0000;
}
</style>
