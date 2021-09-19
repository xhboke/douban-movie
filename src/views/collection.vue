<template>
  <v-container>
    <v-card v-if="flag">
      <v-img :src="now.banner" height="360px" class="white--text align-end">
        <v-card-title>{{ now.title }}</v-card-title>
      </v-img>
      <v-card-subtitle v-html="now.subtitle"></v-card-subtitle>
      <v-card-text>
        <v-row v-for="(n, index) in now.data" :key="index">
          <cardItem :id="m.id" :name="m.title" :img="m.images" :is_bofang="false" :is_new="false" v-for="m in n" :key="m.id" />
          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row v-else>
      <v-col sm="6" md="4" lg="4" cols="12" v-for="item in data" :key="item.id">
        <v-card max-width="344">
          <v-img :src="item.image" height="200px"></v-img>
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-actions>
            <v-btn color="orange lighten-2" text :to="'/collection/' + item.id">
              Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="item.show = !item.show">
              <v-icon>{{ item.show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>
              <v-card-text> {{ item.text }}</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import cardItem from "../components/cardItem";
export default {
  components: {
    cardItem,
  },
  created() {
    document.title = "系列收藏 - " + this.GLOBAL.sitename;
    this.$root.bartitle = "系列收藏";
    this.now = this.data[this.$route.params.id - 1];
    if (this.now) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  watch: {
    "$route.path": function () {
      this.now = this.data[this.$route.params.id - 1];
      if (this.now) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
  },
  data: () => ({
    now: [],
    flag: false,
    data: [
      {
        show: false,
        id: 1,
        title: "豆瓣电影 Top 250",
        image: require("../assets/collection/douban.jpg"),
        banner: require("../assets/collection/detail/douban.png"),
        text: "豆瓣用户每天都在对“看过”的电影进行“很差”到“力荐”的评价，豆瓣根据每部影片看过的人数以及该影片所得的评价等综合数据，通过算法分析产生豆瓣电影 Top 250。",
        subtitle: "",
        data: [
          [
            {
              em: 1,
              id: "1292052",
              title: "肖申克的救赎",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
            },
            {
              em: 2,
              id: "1291546",
              title: "霸王别姬",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
            },
            {
              em: 3,
              id: "1292720",
              title: "阿甘正传",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.webp",
            },
            {
              em: 4,
              id: "1295644",
              title: "这个杀手不太冷",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.webp",
            },
            {
              em: 5,
              id: "1292722",
              title: "泰坦尼克号",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.webp",
            },
            {
              em: 6,
              id: "1292063",
              title: "美丽人生",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.webp",
            },
            {
              em: 7,
              id: "1291561",
              title: "千与千寻",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.webp",
            },
            {
              em: 8,
              id: "1295124",
              title: "辛德勒的名单",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p492406163.webp",
            },
            {
              em: 9,
              id: "3541415",
              title: "盗梦空间",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2616355133.webp",
            },
            {
              em: 10,
              id: "3011091",
              title: "忠犬八公的故事",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p524964039.webp",
            },
          ],
        ],
      },
      {
        show: false,
        id: 2,
        title: "漫威电影宇宙",
        image: require("../assets/collection/marvel.jpg"),
        banner: require("../assets/collection/detail/marvel.png"),
        text: "漫威电影宇宙（英语：Marvel Cinematic Universe，简称MCU）是由漫威漫画工作室基于漫威漫画出版物中的角色独立制作的一系列电影所构成的架空世界和共同世界。该共同世界像漫画中的漫威宇宙一样，是由共同的元素、设定、表演和角色通过跨界作品所建立的，并且与其它漫画、电影与动画等系列同属一个官方认可的多元宇宙。",
        subtitle:
          "漫威电影宇宙（英语：Marvel Cinematic Universe，简称MCU）是由漫威漫画工作室基于漫威漫画出版物中的角色独立制作的一系列电影所构成的架空世界和共同世界。该共同世界像漫画中的漫威宇宙一样，是由共同的元素、设定、表演和角色通过跨界作品所建立的，并且与其它漫画、电影与动画等系列同属一个官方认可的多元宇宙。克拉克·格雷格饰演的菲尔·考森是一名为漫威电影宇宙设计的原创角色，也是唯一一个在所有影视形式中均有出现的角色。<br />漫威电影宇宙中的电影在业界评论和商业收益两方面都获得很大的成功，整个系列达到的全球系列电影票房排行第一位，其中单部电影《复仇者联盟4：终局之战》位列全球最高票房收入列表第一位。除了电影之外，这个系列也扩展到漫画书，一系列被称为“Marvel One-Shots”的短片，以及电视剧《神盾局特工》与《卡特探员》及《捍卫者联盟》系列电视剧。<br />漫威电影宇宙的起源电影是2008年上映的《钢铁人》，直至2012年电影《复仇者联盟》完成“第一阶段”。次年上映的电影《钢铁人3》开启系列的“第二阶段”，直至2015年上映的电影《蚁人》。漫威电影宇宙目前处于2016年电影《美国队长3：英雄内战》开启的“第三阶段”，该阶段的最后一部电影为2019年的《蜘蛛人：离家日》。前三个阶段共计23部电影合称为“无限传奇”系列。电影《黑寡妇》将开启系列的“第四阶段”。<br />电视剧系列进一步扩充了漫威电影宇宙，于2013－14播出季在美国广播公司推出电视剧《神盾局特工》。接著于2015年在线上串流媒体平台网飞推出电视剧《夜魔侠》，2017年在Hulu推出电视剧《离家童盟》，2018年在有线电视台Freeform推出电视剧《斗篷与匕首》。<br />2017年12月，漫威影业所属华特迪士尼公司以524亿美元收购福斯集团旗下部分产权，包括由21世纪福斯所拥有的X战警、惊奇4超人等系列版权，也一并收回华特迪士尼公司旗下漫威影业。美国时间2017年12月14日，华特迪士尼公司宣布X战警、死侍、惊奇4超人等角色，将正式回归漫威电影宇宙。",
        data: [
          [
            {
              em: 1,
              id: "1432146",
              title: "钢铁侠",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p725871968.webp",
            },
            {
              em: 2,
              id: "1866475",
              title: "无敌浩克",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2243996638.webp",
            },
            {
              em: 3,
              id: "3066739",
              title: "钢铁侠2",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p451885601.webp",
            },
            {
              em: 4,
              id: "1866471",
              title: "雷神",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p956098719.webp",
            },
            {
              em: 5,
              id: "2138838",
              title: "美国队长1：复仇者先锋",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1182659238.webp",
            },
            {
              em: 6,
              id: "1866479",
              title: "复仇者联盟1",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1469137689.webp",
            },
          ],
          [
            {
              em: 7,
              id: "3231742",
              title: "钢铁侠3",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1955027201.webp",
            },
            {
              em: 8,
              id: "6560058",
              title: "雷神2：黑暗世界",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2156839164.webp",
            },
            {
              em: 9,
              id: "6390823",
              title: "美国队长2",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2174824694.webp",
            },
            {
              em: 10,
              id: "7065154",
              title: "银河护卫队",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2198455702.webp",
            },
            {
              em: 11,
              id: "10741834",
              title: "复仇者联盟2：奥创纪元",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2237747953.webp",
            },
          ],
          [
            {
              em: 12,
              id: "1866473",
              title: "蚁人",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2266823371.webp",
            },
            {
              em: 13,
              id: "25820460",
              title: "美国队长3：内战",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2332503406.webp",
            },
            {
              em: 14,
              id: "3025375",
              title: "奇异博士",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2388501883.webp",
            },
            {
              em: 15,
              id: "25937854",
              title: "银河护卫队2",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2455261804.webp",
            },
            {
              em: 16,
              id: "24753477",
              title: "蜘蛛侠：英雄归来",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2497756471.webp",
            },
            {
              em: 17,
              id: "25821634",
              title: "雷神3：诸神黄昏",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.webp",
            },
            {
              em: 18,
              id: "6390825",
              title: "黑豹",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.webp",
            },
            {
              em: 19,
              id: "24773958",
              title: "复仇者联盟3：无限战争",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp",
            },
            {
              em: 20,
              id: "26636712",
              title: "蚁人2：黄蜂女现身",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.webp",
            },
            {
              em: 21,
              id: "26213252",
              title: "惊奇队长",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2546360443.webp",
            },
            {
              em: 22,
              id: "26100958",
              title: "复仇者联盟4：终局之战",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2552058346.webp",
            },
          ],
          [
            {
              em: 23,
              id: "26258779",
              title: "银河护卫队3",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2594301021.webp",
            },
            {
              em: 24,
              id: "25828589",
              title: "黑寡妇",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2594097919.webp",
            },
            {
              em: 25,
              id: "30304994",
              title: "奇异博士2",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2565285847.webp",
            },
          ],
        ],
      },
      {
        show: false,
        id: 3,
        title: "星球大战",
        image: require("../assets/collection/starwars.png"),
        banner: require("../assets/collection/detail/starwars.png"),
        text: "中文可简称“星战”，是美国导演兼编剧乔治·卢卡斯所构思拍摄的一系列科幻电影。同时“星球大战”也是该系列电影最早拍摄上映的第四章故事的原始片名。",
        subtitle:
          "《星球大战》（英语：Star Wars），中文可简称“星战”，是美国导演兼编剧乔治·卢卡斯所构思拍摄的一系列科幻电影。同时“星球大战”也是该系列电影最早拍摄上映的第四章故事的原始片名。<br />从1970年代末到1980年代，卢卡斯出品了《星球大战》三部曲。他曾说第一部星战（第四部曲）的人物及故事是参照日本导演黑泽明的《战国英豪》（隠し砦の三悪人）所创作而成；原三部曲以二战英德大战为架构并融入美国西部片及日本武士刀剧的节奏；蕴涵了太空冒险、希腊神话的大视野制作。影片中所使用的特效技术重新定义并改变了往后太空科幻片的未来发展。<br />1990年代末，基于各界要求又拍摄了原三部曲之前的故事，称“星战前传”。同时他把最初的三部曲改为六部系列的第四、五、六集，并将最早的第四集改名为“新希望”（A New Hope）。2012年10月，华特迪士尼公司以40.5亿美元收购卢卡斯影业，迪士尼公司亦宣布制作星战新作三部曲，第七部电影《星球大战：原力觉醒》在英国拍摄，已于2015年12月上映。<br />该片描写，在很久以前，一个遥远的银河系，肩负正义使命的绝地武士与帝国邪恶黑暗势力作战的故事。绝地武士是一群有着非凡天赋的人，经由各种筛选，他们在幼年即开始接受严格特殊训练，其宗旨是认识和使用“原力”（Force）。训练有素的绝地武士有极强的意志力，可以使用无所不在的“原力”来维护银河系的和平。例如，影响意志较弱的人的思想，甚至预感将要发生的事情。绝地武士也有着非凡的战斗力。<br />故事以三条主线贯穿：银河共和国被政治阴谋篡权为银河帝国引发不满而引起内战，不满的共和国拥护者揭竿而起，建立义军与帝国军互相对抗、绝地武士组织的兴衰起落、以及天行者家族在大环境下面临的种种挑战。本片开启好莱坞电影商品授权的庞大事业，旗下分别有小说、漫画、玩具与电玩游戏等相关周边产业，系列中每部电影，小说与电玩游戏，皆以“很久以前，在一个遥远的银河系……”（A long time ago in a galaxy far, far away...）开头。<br />除了电影的故事外，电影之间和前后有动画、漫画、小说和电视游戏增加情节，星球大战的银河历史可以追溯到六部曲前超过二万五千年，和其后三十余年至百多年后，而且至今仍然扩增。这些电影外的故事均称为“扩充宇宙”（Expanded Universe），意思为扩充了的原有故事世界。例如星球大战：克隆人战争系列动画是《克隆人的进攻》及《西斯的复仇》间发生的故事；《星球大战：义军崛起》则皆接续《西斯的复仇》诉说《新的希望》之前的事件等；克隆人之战系列动画故事的角色设定及经过，都有显示在《西斯的复仇》。阿纳金·天行者右脸留下的伤疤以及格里弗斯将军（General Grievous）的出现等就是从卡通而来。",
        data: [
          [
            {
              em: 1,
              id: "1293838",
              title: "星球大战",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p732941361.webp",
            },
            {
              em: 2,
              id: "1296528",
              title: "星球大战2：帝国反击战",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p732937546.webp",
            },
            {
              em: 3,
              id: "1297151",
              title: "星球大战3：绝地归来",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p732934345.webp",
            },
            {
              em: 4,
              id: "1294362",
              title: "星球大战前传1：幽灵的威胁",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2308392633.webp",
            },
            {
              em: 5,
              id: "1297785",
              title: "星球大战前传2：克隆人的进攻",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2308393297.webp",
            },
            {
              em: 6,
              id: "1309078",
              title: "星球大战前传3：西斯的复仇",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p533908031.webp",
            },
            {
              em: 7,
              id: "2982853",
              title: "星球大战：克隆战争",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1790901669.webp",
            },
            {
              em: 8,
              id: "1901329",
              title: "星球大战：克隆人战争 第一季",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2511005903.webp",
            },
            {
              em: 9,
              id: "4316826",
              title: "星球大战：克隆人战争 第二季",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511005400.webp",
            },
            {
              em: 10,
              id: "5342708",
              title: "星球大战：克隆人战争 第三季",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2511005933.webp",
            },
            {
              em: 11,
              id: "6839760",
              title: "星球大战：克隆人战争 第四季",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2511005974.webp",
            },
          ],
        ],
      },
      {
        show: false,
        id: 4,
        title: "DC扩展宇宙",
        image: require("../assets/collection/dc.jpg"),
        banner: require("../assets/collection/detail/dceu.png"),
        text: "DC扩展宇宙（英语：DC Extended Universe，简称DCEU）是一个美国跨媒体制作的共享宇宙，根据DC漫画出版物中的角色改编。如同漫画中的DC宇宙一样，该系列跨越了漫画的剧情元素、设定、演员和角色。",
        subtitle:
          "DC扩展宇宙（英语：DC Extended Universe，简称DCEU）是一个美国跨媒体制作的共享宇宙，根据DC漫画出版物中的角色改编。如同漫画中的DC宇宙一样，该系列跨越了漫画的剧情元素、设定、演员和角色。华纳兄弟发言人曾经表示大众并不需要一个DC漫画改编的电影宇宙。直到2008年，另一美国英雄漫画巨头，漫威建立的电影宇宙于口碑及票房皆取得巨大成功，DC扩展宇宙才正式开始计划，于2013年推出第一部电影。截止至今已有八部电影上映，但由于前期电影普遍口碑不佳，以及第五部电影《正义联盟》票房失利，现已暂缓各部电影间的相关连结。华纳执行长表示未来的电影宇宙将会着重独立的故事而非紧密的连结，但不排斥未来的可能性。有十余部仍处于各种阶段，根据近期最新官方说法指出，电影宇宙并没有完全取消发展计划，目前的英雄个人电影依然属于DCEU世界观。<br />系列中的电影由多名电影工作者编剧及执导。系列电影的主演包含亨利·卡维尔、本·阿弗莱克、盖尔·加朵、玛格·罗比;、埃兹拉·米勒、杰森·莫玛、雷·费舍尔和柴克·莱威等人。华纳兄弟任命创意总监管理DC扩展宇宙部门。他们负责监督制片工作及剧情走向，以在系列电影中建构出一个具凝聚力的主线剧情。<br />DC扩展宇宙的第一部电影为《超人：钢铁之躯》（2013年），接着依次是《蝙蝠侠对超人：正义曙光》（2016年）、《自杀突击队》（2016年）、《神奇女侠》（2017年）、《正义联盟》（2017年）、《水行侠》（2018年）、《雷霆沙赞！》（2019年）、《猛禽小队和哈莉·奎茵》（2020年）和《神奇女侠1984》（2020年），未来的电影包括《扎克·施奈德之正义联盟》（2021年）、《自杀突击队：集结》（2021年）、《闪电侠》（The Flash，2022年）、《水行侠2》（Aquaman 2，2022年）、《雷霆沙赞！2》（Shazam!: Fury of the Gods，2023年）和《黑亚当》（Black Adam）等。<br />DC扩展宇宙还包括串流媒体平台HBO Max上的多部影集，第一部为《和平使者》。",
        data: [
          [
            {
              em: 1,
              id: "2049435",
              title: "超人：钢铁之躯",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1968975252.webp",
            },
            {
              em: 2,
              id: "26714785",
              title: "DC电影出品：正义联盟黎明",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2375773439.webp",
            },
            {
              em: 3,
              id: "24750534",
              title: "蝙蝠侠大战超人：正义黎明",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2316834186.webp",
            },
            {
              em: 4,
              id: "3569910",
              title: "自杀小队",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2363084076.webp",
            },
            {
              em: 5,
              id: "1578714",
              title: "神奇女侠",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2460006593.webp",
            },
            {
              em: 6,
              id: "2158490",
              title: "正义联盟",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.webp",
            },
            {
              em: 7,
              id: "3878007",
              title: "海王",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.webp",
            },
            {
              em: 8,
              id: "2244426",
              title: "雷霆沙赞！",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551249211.webp",
            },
            {
              em: 9,
              id: "30160393",
              title: "猛禽小队和哈莉·奎茵",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575974437.webp",
            },
            {
              em: 10,
              id: "27073752",
              title: "神奇女侠1984",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2626959989.webp",
            },
            {
              em: 11,
              id: "35076714",
              title: "扎克·施奈德版正义联盟",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2628517632.webp",
            },
            {
              em: 12,
              id: "26741632",
              title: "X特遣队：全员集结",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2618108835.webp",
            },
            {
              em: 13,
              id: "33402300",
              title: "雷霆沙赞！众神之怒",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2618605993.webp",
            },
            {
              em: 14,
              id: "35209701",
              title: "和平使者",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621126980.webp",
            },
            {
              em: 15,
              id: "26147476",
              title: "绿灯军团",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2523309526.webp",
            },
            {
              em: 16,
              id: "30455612",
              title: "海沟族",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2547688550.webp",
            },
            {
              em: 17,
              id: "30444942",
              title: "海王2",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2546862724.webp",
            },
            {
              em: 18,
              id: "26796764",
              title: "哥谭魅影",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2514868333.webp",
            },
            {
              em: 19,
              id: "3011317",
              title: "闪电侠",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2068458389.webp",
            },
            {
              em: 20,
              id: "27008573",
              title: "蝙蝠女",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2521052048.webp",
            },
            {
              em: 21,
              id: "26959697",
              title: "黑亚当",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2618130978.webp",
            },
            {
              em: 22,
              id: "30171426",
              title: "新神族",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2521053289.webp",
            },
            {
              em: 23,
              id: "27094789",
              title: "哈莉·奎茵与小丑",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2506906062.webp",
            },
            {
              em: 24,
              id: "26147395",
              title: "正义联盟2",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2286315543.webp",
            },
            {
              em: 25,
              id: "27181022",
              title: "丧钟",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2521054236.webp",
            },
          ],
        ],
      },
      {
        show: false,
        id: 5,
        title: "X战警",
        image: require("../assets/collection/x.jpeg"),
        banner: require("../assets/collection/detail/xman.png"),
        text: "X战警电影系列是以漫威漫画虚构超级英雄团体《X战警》为基础的电影（Earth-10005）。电影主要角色以金刚狼为主，描写X教授与万磁王为两派，对人类与变种人关系各方争论相异的争斗，X教授相信人类与变种人可以和平共处，而万磁王则坚信战争来到，倾向与人类宣战。电影也将《Weapon X》与《Dark Phoenix》漫画主线加入电影作为次要剧情。",
        subtitle:
          "X战警电影系列是以漫威漫画虚构超级英雄团体《X战警》为基础的电影（Earth-10005）。电影主要角色以金刚狼为主，描写X教授与万磁王为两派，对人类与变种人关系各方争论相异的争斗，X教授相信人类与变种人可以和平共处，而万磁王则坚信战争来到，倾向与人类宣战。电影也将《Weapon X》与《Dark Phoenix》漫画主线加入电影作为次要剧情。<br />20世纪福克斯于1994年取得电影角色版权，在经过多次的修订，由布莱恩·辛格来执导《X战警》（2000年）和《X战警2》（2003年），随后布莱恩·辛格离开剧组前去拍摄《超人归来》，而第三部《X战警3：最后之战》（2006年）由布莱特·瑞纳（Brett Ratner）导演接手。评论家赞赏布莱恩·辛格执导的前两集的黑暗色彩和写实风格，以及对于歧视与宽容的探讨，而对于布莱特·瑞纳的评论则褒贬不一。不过，每部电影最后均获益不少票房。《X战警》系列电影可说是带起2000年代超级英雄电影的先驱。",
        data: [
          [
            {
              em: 1,
              id: "1295250",
              title: "X战警",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2446530060.webp",
            },
            {
              em: 2,
              id: "1305724",
              title: "X战警2",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1349307666.webp",
            },
            {
              em: 3,
              id: "1401524",
              title: "X战警3：背水一战",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2230029851.webp",
            },
            {
              em: 4,
              id: "1792928",
              title: "金刚狼",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2063167557.webp",
            },
            {
              em: 5,
              id: "3168089",
              title: "X战警：第一战",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p956878707.webp",
            },
            {
              em: 6,
              id: "3718424",
              title: "金刚狼2",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2151837713.webp",
            },
            {
              em: 7,
              id: "10485647",
              title: "X战警：逆转未来",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2181156848.webp",
            },
            {
              em: 8,
              id: "3718279",
              title: "死侍",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2309264172.webp",
            },
            {
              em: 9,
              id: "25786060",
              title: "X战警：天启",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2352321614.webp",
            },
            {
              em: 10,
              id: "25765735",
              title: "金刚狼3：殊死一战",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2431980130.webp",
            },
            {
              em: 11,
              id: "26908002",
              title: "天赋异禀 第一季",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2493581990.webp",
            },
            {
              em: 12,
              id: "26588308",
              title: "死侍2：我爱我家",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2545479945.webp",
            },
            {
              em: 13,
              id: "27623045",
              title: "天赋异禀 第二季",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2532889996.webp",
            },
            {
              em: 14,
              id: "26667010",
              title: "X战警：黑凤凰",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555886490.webp",
            },
            {
              em: 15,
              id: "25885824",
              title: "牌皇",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2516773515.webp",
            },
            {
              em: 16,
              id: "26389321",
              title: "新变种人",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2582165718.webp",
            },
            {
              em: 17,
              id: "24861355",
              title: "非凡特工队",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2523310608.webp",
            },
            {
              em: 18,
              id: "26957900",
              title: "死侍3",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2630407125.webp",
            },
          ],
        ],
      },
      {
        show: false,
        id: 6,
        title: "哈利·波特系列电影",
        image: require("../assets/collection/hlpt.jpg"),
        banner: require("../assets/collection/detail/harrypotter.png"),
        text: "《哈利·波特》（英语：Harry Potter）是一系列英国与美国合拍的奇幻冒险电影，剧情根据作家J·K·罗琳所写的哈利·波特小说改编，电影为华纳兄弟发行，主要系列包含八部奇幻片，从《哈利·波特与魔法石》（2001年）开始，《哈利·波特与死亡圣器(下)》（2011年）完结。2016年开始与外传系列《怪兽系列电影》共享“魔法世界”的跨媒体制作，而《神奇动物在哪里》（2016年）为该系列的首作，由大卫·叶慈执导。",
        subtitle:
          "《哈利·波特》（英语：Harry Potter）是一系列英国与美国合拍的奇幻冒险电影，剧情根据作家J·K·罗琳所写的哈利·波特小说改编，电影为华纳兄弟发行，主要系列包含八部奇幻片，从《哈利·波特与魔法石》（2001年）开始，《哈利·波特与死亡圣器(下)》（2011年）完结。2016年开始与外传系列《怪兽系列电影》共享“魔法世界”的跨媒体制作，而《神奇动物在哪里》（2016年）为该系列的首作，由大卫·叶慈执导。<br />该系列主要由大卫·海曼制作，丹尼尔·拉德克利夫、鲁伯特·葛林特及埃玛·沃森饰演三位主角：哈利·波特、罗恩·韦斯莱和赫敏·格兰杰。执导过哈利·波特电影的四位导演：克里斯·哥伦布、艾方索·柯朗、麦克·纽威尔与叶慈。除了《哈利·波特与凤凰社》（2007年）之外，迈克尔·戈登堡皆和史提夫·克罗夫斯合作编剧，系列发行花了十多年才完成，主要剧情讲述哈利·波特对抗宿敌伏地魔的故事。<br />《哈利·波特与死亡圣器》是小说系列的第七部，也是最后一部哈利·波特小说，电影分成两部来改编，第一部于2010年11月发行，第二部则于2011年7月上映。",
        data: [
          [
            {
              em: 1,
              id: "1295038",
              title: "哈利·波特与魔法石",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614949805.webp",
            },
            {
              em: 2,
              id: "1296996",
              title: "哈利·波特与密室",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1082651990.webp",
            },
            {
              em: 3,
              id: "1291544",
              title: "哈利·波特与阿兹卡班的囚徒",
              images:
                "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910812549.webp",
            },
            {
              em: 4,
              id: "1309055",
              title: "哈利·波特与火焰杯",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p735391084.webp",
            },
            {
              em: 5,
              id: "1457217",
              title: "哈利·波特与凤凰社",
              images:
                "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p443403700.webp",
            },
            {
              em: 6,
              id: "1433330",
              title: "哈利·波特与混血王子",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1108070214.webp",
            },
            {
              em: 7,
              id: "2051007",
              title: "哈利·波特与死亡圣器(上)",
              images:
                "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p721429854.webp",
            },
            {
              em: 8,
              id: "3011235",
              title: "哈利·波特与死亡圣器(下)",
              images:
                "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p917846733.webp",
            },
          ],
        ],
      },
    ],
  }),
};
</script>
