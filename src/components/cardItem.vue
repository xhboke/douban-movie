<!--
组件传值
v-row
<cardItem
  id="27662541"
  name="妙先生"
  img="//puui.qpic.cn/vcover_vt_pic/0/mzc00200ipatcyv1601534862337/350"
  is_bofang="1"
  is_new="1"
  rank="9.2"
  v-for="n in 10"
  :key="n"
/>
-->
<template v-if="name">
  <v-col sm="6" md="2" cols="6">
    <v-hover v-slot:default="{ hover }">
      <v-card>
        <v-img class="white--text align-end" :src="img" aspect-ratio="0.7">
          <div class="figure_caption"></div>
          <span class="figure_score" v-if="rank != 0">{{ rank }}</span>
          <img
            v-if="is_bofang"
            class="mark_v"
            :src="require('../assets/card/card_dubo.png')"
          />
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-5 white--text pa-2"
              style="height: 100%"
            >
              {{ name }}
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
    <v-list-item-title class="bold mt-2 mx-1"
      ><strong class="red--text text--lighten-1" v-if="is_new">[新]</strong>
      <router-link :to="'/subject/' + id" id="name"> {{ name }}</router-link>
    </v-list-item-title>
  </v-col>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    img: {
      type: String,
    },
    name: {
      type: String,
    },
    is_bofang: {
      type: Boolean,
    },
    is_new: {
      type: Boolean,
    },
    rank: {
      type: String,
    },
  },
};
</script>
<style scoped>
.figure_score {
  position: absolute;
  right: 2px;
  bottom: 0;
  width: 35px;
  height: 28px;
  color: #fff;
  color: #ff5c38;
  font-size: 0;
  font-size: 17px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
}
.figure_caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: 20px;
  padding: 10px 10px 4px;
  overflow: hidden;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(0deg, #000, #000 25.5%, #000 70%, #000);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3) 25.5%,
    rgba(0, 0, 0, 0.08) 70%,
    rgba(0, 0, 0, 0)
  );
  color: #fff;
  font-size: 13px;
  letter-spacing: normal;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.mark_v {
  position: absolute;
  top: 5px;
  right: 5px;
  pointer-events: none;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.bold {
  font-weight: 700;
  letter-spacing: 0;
}
#name {
  color: #111111;
  text-decoration: none;
}
#name:hover {
  color: #ff6144;
}
</style>
