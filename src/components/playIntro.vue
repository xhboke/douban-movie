<template>
  <v-card class="mt-3">
    <v-toolbar flat :color="this.GLOBAL.intro_color" dark>
      <v-toolbar-title>影片简介</v-toolbar-title>
    </v-toolbar>
    <v-tabs>
      <v-tab>
        <v-icon left>mdi-scatter-plot</v-icon>
        剧情简介
      </v-tab>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        影片人员
      </v-tab>
      <v-tab>
        <v-icon left>mdi-more</v-icon>
        相关视频
      </v-tab>
      <v-tab>
        <v-icon left>mdi-information-outline</v-icon>
        更多信息
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p v-html="info.Description"></p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              v-for="n in info.Actors"
              v-bind:key="n.ActorId"
            >
              <v-avatar left>
                <router-link :to="'/celebrity/' + n.ActorId" class="text-decoration-none">
                  <v-img :src="n.ActorImage" class="imgt"></v-img>
                </router-link>
              </v-avatar>
              {{ n.ActorName }} 【{{ n.ActorRole }} 】
            </v-chip>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-row class="mx-1">
          <cardItem
            :id="n.id"
            :name="n.name"
            :img="n.img"
            v-for="(n, index) in info.OtherLike"
            :key="n.id + index"
          />
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-card-text>
          <p v-if="info.Year">年代：{{ info.Year }}</p>
          <p v-if="info.Language">语言：{{ info.Language }}</p>
          <p v-if="info.Movie_length">影片时长：{{ info.Movie_length }}</p>
          <p v-if="info.Single_episode_length">
            单集片长：{{ info.Single_episode_length }}
          </p>
          <p v-if="info.DatePublished">首播：{{ info.DatePublished }}</p>
          <div v-if="info.Single_episode_length">
            <p>片长：{{ info.Single_episode_length }}</p>
          </div>

          <p v-if="info.Votes">评分人数：{{ info.Votes }}</p>
        </v-card-text>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import cardItem from "./cardItem.vue";
export default {
  components: {
    cardItem,
  },
  props: {
    info: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.imgt {
  top: 12px;
  left: 0px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
  background-color: #fff;
  opacity: 0.6;
}
</style>
