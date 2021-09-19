<template>
  <div>
    <v-sheet>
      <!-- form -->
      <v-slide-group show-arrows center-active v-model="form_" class="mt-2">
        <v-slide-item v-for="n in Form" :key="n" v-slot="{ active, toggle }">
          <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded @click="toggle(), change_()">
            {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
      <!-- type -->
      <v-slide-group show-arrows center-active v-model="type_" class="mt-2">
        <v-slide-item v-for="n in Type" :key="n" v-slot="{ active, toggle }">
          <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded @click="toggle(), change_()">
            {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
      <!-- region -->
      <v-slide-group show-arrows center-active v-model="region_" class="mt-2">
        <v-slide-item v-for="n in Region" :key="n" v-slot="{ active, toggle }">
          <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded @click="toggle(), change_()">
            {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
      <!-- year -->
      <v-slide-group show-arrows center-active v-model="year_" class="mt-2">
        <v-slide-item v-for="n in Year" :key="n" v-slot="{ active, toggle }">
          <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded @click="toggle(), change_()">
            {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
      <!-- style -->
      <v-slide-group show-arrows center-active v-model="style_" class="mt-2">
        <v-slide-item v-for="n in Style" :key="n" v-slot="{ active, toggle }">
          <v-btn class="mx-2" :input-value="active" active-class="purple white--text" depressed rounded @click="toggle(), change_()">
            {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-radio-group v-model="sort_" row>
      <v-radio v-for="n in Sort" :key="n[0]" :label="n[1]" :value="n[0]" @click="change_()"></v-radio>
    </v-radio-group>
    <v-divider></v-divider>

    <v-row>
      <cardItem :id="n.id" :name="n.name" :img="n.image" :rank="n.rating" v-for="n in more_data" :key="n.id" />
    </v-row>
    <v-btn block @click="more_page++, more_more()">
      {{ more_more_text }}
    </v-btn>
  </div>
</template>
<script>
import cardItem from "../components/cardItem";
export default {
  components: {
    cardItem,
  },
  created() {
    document.title = "更多影片 - " + this.GLOBAL.sitename;
    this.$root.bartitle = "更多影片";
    this.reFresh([], 0, "U");
  },
  methods: {
    reFresh: function (tags, page, sort) {
      this.GLOBAL.api.tag(tags.join(","), page, sort).then((res) => {
        this.more_data = res.data.data;
        this.flag = true;
      });
    },
    change_: function () {
      this.more_page = 0;
      this.choice_tags = [
        this.Form[this.form_ == 0 ? 99 : this.form_],
        this.Type[this.type_ == 0 ? 99 : this.type_],
        this.Region[this.region_ == 0 ? 99 : this.region_],
        this.Year[this.year_ == 0 ? 99 : this.year_],
        this.Style[this.style_ == 0 ? 99 : this.style_],
      ];
      this.reFresh(this.choice_tags, this.more_page, this.sort_);
      console.log(this.choice_tags);
    },
    more_more: function () {
      this.GLOBAL.api
        .tag(this.choice_tags.join(","), this.more_page, this.sort_)
        .then((res) => {
          var copyObj = Object.assign({}, this.more_data);
          if (res.data.data != null) {
            var obj = Object.assign(copyObj, res.data.data);
          } else {
            obj = copyObj;
            this.more_more_text = "到底啦";
          }
          this.more_data = obj;
        });
    },
  },

  data() {
    return {
      flag: false,
      more_data: "",
      more_page: 0,
      choice_tags: ["", "", "", "", ""],
      more_more_text: "加载更多",
      Sort: [
        ["U", "近期热门"],
        ["T", "标记最多"],
        ["S", "评分最高"],
        ["R", "最新上映"],
      ],
      sort_: "U",

      Form: ["全部形式", "电影", "电视剧", "综艺", "动漫", "纪录片", "短片"],
      form_: 0,

      Type: [
        "全部类型",
        "剧情",
        "喜剧",
        "动作",
        "爱情",
        "科幻",
        "动画",
        "悬疑",
        "惊悚",
        "恐怖",
        "犯罪",
        "同性",
        "音乐",
        "歌舞",
        "传记",
        "历史",
        "战争",
        "西部",
        "奇幻",
        "冒险",
        "灾难",
        "武侠",
        "情色",
      ],
      type_: 0,

      Region: [
        "全部地区",
        "中国大陆",
        "欧美",
        "美国",
        "中国香港",
        "中国台湾",
        "日本",
        "韩国",
        "英国",
        "法国",
        "德国",
        "意大利",
        "西班牙",
        "印度",
        "泰国",
        "俄罗斯",
        "伊朗",
        "加拿大",
        "澳大利亚",
        "爱尔兰",
        "瑞典",
        "巴西",
        "丹麦",
      ],
      region_: 0,

      Year: [
        "全部年代",
        "2020",
        "2019",
        "2010年代",
        "2000年代",
        "1990年代",
        "1980年代",
        "1970年代",
        "1960年代",
        "更早",
      ],
      year_: 0,

      Style: [
        "全部特色",
        "经典",
        "青春",
        "文艺",
        "搞笑",
        "励志",
        "魔幻",
        "感人",
        "女性",
        "黑帮",
      ],
      style_: 0,
    };
  },
};
</script>
