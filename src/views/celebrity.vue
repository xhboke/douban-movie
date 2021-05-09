<template>
  <div>
    <v-container v-if="celebrity_data.name">
      <v-card>
        <v-card-title v-text="celebrity_data.name"></v-card-title>
        <v-card-text>
          <v-row>
            <v-col md="2" sm="6" cols="6">
              <v-img :src="celebrity_data.image"></v-img>
              <div class="text-overline">[ID: {{ celebrity_data.id }}]</div>
            </v-col>
            <v-col md="10" sm="12" cols="12">
              <div class="text-md-body-1" v-if="celebrity_data.sex">
                性别: {{ celebrity_data.sex }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.constellation">
                星座: {{ celebrity_data.constellation }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.birthday">
                出生日期: {{ celebrity_data.birthday }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.birthplace">
                出生地: {{ celebrity_data.birthplace }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.profession">
                职业: {{ celebrity_data.profession }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.othername">
                别名: {{ celebrity_data.othername }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.familymember">
                家庭成员: {{ celebrity_data.familymember }}
              </div>
              <div class="text-md-body-1" v-if="celebrity_data.website">
                官方网站: {{ celebrity_data.website }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="mt-3">
        <v-card-title>影人简介</v-card-title>
        <v-card-text v-html="celebrity_data.introduction"></v-card-text>
      </v-card>
      <v-card class="mt-3">
        <v-card-title>影人图片</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              sm="6"
              md="2"
              lg="2"
              cols="6"
              v-for="i in celebrity_data.some_images"
              :key="i"
            >
              <v-card><v-img :src="i"></v-img></v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="mt-3">
        <v-card-title>最近电影</v-card-title>
        <v-card-text>
          <v-row>
            <cardItem
              :id="n.id"
              :name="n.title"
              :img="n.image"
              :is_bofang="false"
              :is_new="false"
              v-for="n in celebrity_data['recent_movies']"
              :key="n.id"
            />
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
    <v-card v-else>
      <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="px-3 pt-3 pb-3"
        v-if="!flag"
      >
        <v-skeleton-loader type="card" class="mt-3"></v-skeleton-loader>
        <v-skeleton-loader type="card-heading" class="mt-3"></v-skeleton-loader>
      </v-sheet>
    </v-card>
  </div>
</template>
<script>
import cardItem from "../components/cardItem";
export default {
  components: {
    cardItem,
  },
  inject: ["theme"],
  data() {
    return {
      flag: false,
      celebrity_data: [],
    };
  },
  created() {
    this.reFresh(this.$route.params.id);
  },
  methods: {
    reFresh: function (id) {
      this.GLOBAL.api.celebrity(id).then((res) => {
        this.celebrity_data = res.data;
        if (res.data.name) {
          document.title = res.data.name + " - " + this.GLOBAL.sitename;
          this.$root.bartitle = res.data.name;
          this.flag = true;
        }
      });
    },
  },
};
</script>
