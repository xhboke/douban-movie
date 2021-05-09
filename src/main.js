import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueCookies from 'vue-cookies';
import globalVariable from "./api/global_variable.js";
Vue.prototype.GLOBAL = globalVariable;
Vue.config.productionTip = false;
Vue.use(VueCookies)
router.afterEach(() => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  vuetify,
  data: function () {
    return {
      bartitle: "", //全局操作页内标题
    };
  },
  render: (h) => h(App),
}).$mount("#app");
