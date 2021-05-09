<template>
  <div>
    <v-text-field
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search..."
      clearable
      flat
      :loading="text_loading"
      v-model="search_name"
      @keyup.enter="Go_search"
    ></v-text-field>

    <div v-if="flag">
      <div class="text-h6 mt-6">关于“{{ this.$route.params.search_name }}”的搜索结果</div>
      <v-row>
        <cardItem
          :id="n.id"
          :name="n.name"
          :img="n.image"
          :rank="n.rating"
          v-for="n in search_data"
          :key="n.id"
        />
      </v-row>
      <v-btn block @click="search_page++, more_search(search_page)">
        {{ search_more_text }}
      </v-btn>
    </div>
    <div v-else></div>
  </div>
</template>
<script>
import cardItem from "../components/cardItem";
export default {
  data() {
    return {
      flag: false,
      text_loading: false,
      search_name: "",
      search_page: 0,
      search_data: "",
      search_more_text: "查看更多",
    };
  },
  components: {
    cardItem,
  },
  created() {
    if (this.$route.params.search_name) {
      document.title =
        "关于" + this.$route.params.search_name + "的搜索结果 - " + this.GLOBAL.sitename;
      this.$root.bartitle = this.GLOBAL.sitename;
      this.search(this.$route.params.search_name, 0);
    } else {
      document.title = "搜索 - " + this.GLOBAL.sitename;
      this.$root.bartitle = "搜索";
    }
  },
  methods: {
    Go_search: function () {
      this.$router.push("/search/" + this.search_name);
      this.search(this.search_name, 0);
    },
    search: function (name, page) {
      this.GLOBAL.api.search(name, page).then((res) => {
        this.search_name = this.$route.params.search_name;
        this.search_data = res.data.data;
        this.flag = true;
      });
    },
    more_search: function () {
      this.GLOBAL.api.search(this.$route.params.search_name, this.search_page).then((res) => {
        var copyObj = Object.assign({}, this.search_data);
        if (res.data.data != null) {
          var obj = Object.assign(copyObj, res.data.data);
        } else {
          obj = copyObj;
          this.search_more_text = "到底啦";
        }
        this.search_data = obj;
      });
    },
  },
};
</script>
