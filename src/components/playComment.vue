<template>
  <v-card class="mt-3" v-if="flag">
    <v-toolbar flat :color="this.GLOBAL.comment_color" dark>
      <v-toolbar-title> 评论 </v-toolbar-title>
    </v-toolbar>

    <v-list three-line>
      <div v-for="(n, index) in comment_data" :key="n.id">
        <v-divider v-if="index != 0" :inset="true"></v-divider>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="n.image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ n.name }}</v-list-item-title>
            <v-list-item-subtitle
              >{{ n.time }}
              <v-rating
                :value="n.rating"
                dense
                x-small
                color="orange"
                background-color="orange"
                hover
                half-increments
                readonly
              ></v-rating
            ></v-list-item-subtitle>

            <v-list-item-subtitle> {{ n.content }} </v-list-item-subtitle>
          </v-list-item-content>

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>11111</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </div>
    </v-list>
    <v-btn block @click="comments_page++, more_comment(comments_page)">
      {{ more_text }}
    </v-btn>
  </v-card>
</template>
<script>
export default {
  props: {
    play_comment_Id: {
      type: String,
    },
  },
  data() {
    return {
      flag: false,
      comment_data: [],
      comments_page: 0,
      more_text: "查看更多",
    };
  },
  created() {
    if (this.$route.params.id) {
      this.GLOBAL.api.comment(this.$route.params.id, 0).then((res) => {
        this.comment_data = res.data;
        this.flag = true;
      });
    }
  },
  methods: {
    more_comment: function (page) {
      this.GLOBAL.api.comment(this.$route.params.id, page).then((res) => {
        var copyObj = Object.assign({}, this.comment_data);
        if (res.data != null) {
          var obj = Object.assign(copyObj, res.data);
        } else {
          obj = copyObj;
          this.more_text = "到底啦";
        }
        this.comment_data = obj;
      });
    },
  },
};
</script>
