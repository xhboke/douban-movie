<template>
  <div>
    <v-toolbar :color="this.GLOBAL.toolbar_color" dark>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="to_url('')" v-bind="attrs" v-on="on">
            <v-icon>mdi-home-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>首页</span>
      </v-tooltip>

      <v-toolbar-title>{{ this.$root.bartitle }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="to_url('search')" v-bind="attrs" v-on="on">
            <v-icon>mdi-movie-search-outline</v-icon>
          </v-btn>
        </template>
        <span>搜索影片</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="to_url('collection')" v-bind="attrs" v-on="on">
            <v-icon>mdi-sort-variant</v-icon>
          </v-btn>
        </template>
        <span>系列收藏</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="to_url('more')" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <span>更多影片</span>
      </v-tooltip>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    to_url: function (url) {
      this.$router.push("/" + url);
    },
  },
};
</script>
