<template>
  <v-container>
    <v-card>
      <v-card-title>界面设置</v-card-title>
      <v-card-subtitle>一、顶部</v-card-subtitle>
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
      <v-card-title>功能设置</v-card-title>
      <v-card-subtitle>一、播放设置</v-card-subtitle>
      <v-card-text>
        <v-switch
          class="mt-0"
          messages="是否开启播放功能"
          v-model="is_open_play"
          :label="is_open_play ? '开启' : '关闭'"
          @change="set_open_play(is_open_play)"
        ></v-switch>
        <v-switch
          disabled
          class="mt-1"
          messages="是否开启历史播放功能"
          v-model="is_open_history"
          :label="is_open_history ? '开启' : '关闭'"
          @change="set_open_history(is_open_history)"
        ></v-switch>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      toolbar_color: this.GLOBAL.toolbar_color,
      is_open_play: true,
      is_open_history: true,
    };
  },
  methods: {
    set_toolbar_color: function (color) {
      this.$cookies.set("toolbar_color", color, { expires: 365 });
    },
    set_open_play: function (is_open_play) {
      if (is_open_play) {
        this.$cookies.set("is_open_play", 1, { expires: 365 });
      } else {
        this.$cookies.set("is_open_play", 0, { expires: 365 });
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
  },
};
</script>
