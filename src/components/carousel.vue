<template>
  <div>
    <v-card class="hidden-sm-and-down">
      <v-carousel
        cycle
        height="388"
        hide-delimiter-background
        show-arrows-on-hover
        v-model="carousel_model"
      >
        <v-carousel-item
          :src="n.img"
          :to="'/subject/' + n.id"
          v-for="n in carousel_data.md"
          :key="n.id"
        >
          <v-card-text class="white--text">{{ n.name }}</v-card-text>
        </v-carousel-item>
      </v-carousel>
    </v-card>

    <v-card class="hidden-md-and-up">
      <v-carousel
        cycle
        height="238"
        hide-delimiter-background
        show-arrows-on-hover
        v-model="carousel_model"
        @change="change_title(carousel_model)"
      >
        <v-carousel-item
          :src="n.img"
          :to="'/subject/' + n.id"
          v-for="n in carousel_data.xs"
          :key="n.id"
        >
          <v-card-text>{{ n.name }}</v-card-text>
        </v-carousel-item>
      </v-carousel>
      <v-card-text>
        <span class="text-justify" v-if="carousel_data.xs">
          {{ carousel_subtitle }}
          <strong class="float-right">
            {{ carousel_model + 1 }}/{{ carousel_data.xs.length }}
          </strong>
        </span>
      </v-card-text>
    </v-card>

    <v-alert
      border="bottom"
      colored-border
      :type="this.GLOBAL.alert_type"
      elevation="2"
      class="mt-2"
      icon="mdi-douban"
      dismissible
    >
      <span v-html="carousel_data.ad"></span>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      carousel_subtitle: "",
      carousel_model: 0,
      carousel_data: [],
    };
  },
  created() {
    this.carousel();
  },
  methods: {
    carousel: function () {
      this.GLOBAL.api.carousel().then((res) => {
        this.carousel_data = res.data;
        this.carousel_subtitle = this.carousel_data.xs[0].name;
        this.flag = true;
      });
    },
    change_title: function (number) {
      this.carousel_subtitle = this.carousel_data.xs[number].name;
    },
  },
};
</script>
