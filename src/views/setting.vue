<template>
  <v-container>
    <v-card>
      <snackbar :snackbar="snackbar_open" :text="snackbar_text" />
      <v-card-title>一、界面设置</v-card-title>
      <v-card-subtitle>1、顶部颜色设置（刷新后显示）</v-card-subtitle>
      <v-card-text>
        <v-btn color="#3F51B5" class="mb-1 mx-1" @click="set_toolbar_color('3F51B5')">
        </v-btn>
        <v-btn color="#009688" class="mb-1 mx-1" @click="set_toolbar_color('009688')">
        </v-btn>
        <v-btn color="#607D8B" class="mb-1 mx-1" @click="set_toolbar_color('607D8B')">
        </v-btn>
        <v-btn color="#9E9E9E" class="mb-1 mx-1" @click="set_toolbar_color('9E9E9E')">
        </v-btn>
        <v-btn color="#6200EA" class="mb-1 mx-1" @click="set_toolbar_color('6200EA')">
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title>二、功能设置</v-card-title>

      <v-card-text>
        <div>1、影片播放设置</div>
        <v-switch class="mt-0" messages="是否开启播放功能" v-model="is_open_play" :label="is_open_play ? '开启' : '关闭'" @change="set_open_play(is_open_play)"></v-switch>
        <v-switch disabled class="mt-1" messages="是否开启历史播放功能" v-model="is_open_history" :label="is_open_history ? '开启' : '关闭'" @change="set_open_history(is_open_history)"></v-switch>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="mt-n6">
        <v-radio-group v-model="radios">
          <template v-slot:label>
            <div>2、选择影片评论的<strong>排序方式</strong></div>
          </template>
          <v-radio value="new_score" @change="set_comment_sort('new_score')">
            <template v-slot:label>
              <div><strong class="success--text">热门</strong></div>
            </template>
          </v-radio>
          <v-radio value="time" @change="set_comment_sort('time')">
            <template v-slot:label>
              <div><strong class="primary--text">最新</strong></div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-card-text>

    </v-card>
  </v-container>
</template>
<script>
import snackbar from "../components/snackbar";
export default {
  data() {
    return {
      toolbar_color: this.GLOBAL.toolbar_color,
      is_open_play: true,
      is_open_history: false,
      radios: "",
      snackbar_text: "",
      snackbar_open: false,
    };
  },
  components: {
    snackbar,
  },
  methods: {
    open_sncakbar: function (info) {
      this.snackbar_open = true;
      this.snackbar_text = info;
    },
    set_comment_sort: function (sort) {
      this.$cookies.set("comment_sort", sort, { expires: 365 });
      if (this.$cookies.get("comment_sort") == sort) {
        this.open_sncakbar(
          "设置评论排序为【" +
            (sort == "new_score" ? "热门" : "最新") +
            "】成功！"
        );
      } else {
        this.open_sncakbar(
          "设置评论排序为【" +
            (sort == "new_score" ? "热门" : "最新") +
            "】失败！"
        );
      }
    },
    set_toolbar_color: function (color) {
      this.$cookies.set("toolbar_color", color, { expires: 365 });
      if (this.$cookies.get("toolbar_color") == color) {
        this.open_sncakbar("设置顶部颜色为【#" + color + "】成功！");
      } else {
        this.open_sncakbar("设置顶部颜色为【#" + color + "】失败！");
      }
    },
    set_open_play: function (is_open_play) {
      if (is_open_play) {
        this.$cookies.set("is_open_play", 1, { expires: 365 });
        if (this.$cookies.get("is_open_play") == 1) {
          this.open_sncakbar("开启影片播放功能！");
        } else {
          this.open_sncakbar("开启影片播放功能失败！");
        }
      } else {
        this.$cookies.set("is_open_play", 0, { expires: 365 });
        if (this.$cookies.get("is_open_play") == 0) {
          this.open_sncakbar("关闭影片播放功能！");
        } else {
          this.open_sncakbar("关闭影片播放功能失败！");
        }
      }
    },
    set_open_history: function (is_open_history) {
      if (is_open_history) {
        this.$cookies.set("is_open_history", 1, { expires: 365 });
      } else {
        this.$cookies.set("is_open_history", 0, { expires: 365 });
      }
    },
  },
  created() {
    document.title = "设置 - " + this.GLOBAL.sitename;
    if (this.$cookies.isKey("toolbar_color")) {
      this.toolbar_color = this.$cookies.get("toolbar_color");
    }
    if (this.$cookies.isKey("is_open_play")) {
      if (this.$cookies.get("is_open_play") == 1) {
        this.is_open_play = true;
      } else {
        this.is_open_play = false;
      }
    }
    if (this.$cookies.isKey("is_open_history")) {
      if (this.$cookies.get("is_open_history") == 1) {
        this.is_open_history = true;
      } else {
        this.is_open_history = false;
      }
    }
    if (this.$cookies.isKey("comment_sort")) {
      this.radios = this.$cookies.get("comment_sort");
    }
  },
};
</script>
