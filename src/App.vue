<template>
  <v-app>
    <Header />
    <v-main>
      <v-container class="box">
        <router-view></router-view>
        <!--回到顶部按钮-->
        <v-btn v-show="backTopShow" class="goTop" color="primary" @click="$vuetify.goTo(0, 'duration')" fab small dark fixed bottom right>
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      dialog: false,
      backTopShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    this.$root.bartitle = this.GLOBAL.sitename;
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop + document.body.scrollTop > 500) {
        this.backTopShow = true;
      } else {
        this.backTopShow = false;
      }
    },
  },
};
</script>

<style>
.box {
  max-width: 1080px;
}
</style>
