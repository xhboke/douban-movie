import axios from "../utils/http";
import VueCookies from 'vue-cookies';

const base = {
  baseUrl: "http://localhost:8000",
};
const api = {
  search(name, page) {
    return axios.get(base.baseUrl + "/search/" + name + "/" + page);
  },
  info(id, flag = 0) {
    if (flag == 1) {
      return axios.get(base.baseUrl + "/subject/" + id + "/1");
    } else {
      return axios.get(base.baseUrl + "/subject/" + id);
    }
  },
  comment(id, page) {
    if (VueCookies.isKey('comment_sort')) {
      return axios.get(base.baseUrl + "/subject/" + id + "/comments?page=" + page + "&sort=" + VueCookies.get("comment_sort"));
    } else {
      return axios.get(base.baseUrl + "/subject/" + id + "/comments?page=" + page);
    }
  },
  celebrity(id) {
    return axios.get(base.baseUrl + "/celebrity/" + id);
  },
  tag(tags, page, sort) {
    return axios.get(base.baseUrl + "/tag?tags=" + tags + "&page=" + page + "&sort=" + sort);
  },
  now_playing() {
    return axios.get(base.baseUrl + "/movies/nowplaying");
  },
  index_movie() {
    return axios.get(base.baseUrl + "/movies/movie");
  },
  index_tv() {
    return axios.get(base.baseUrl + "/movies/tv");
  },
  top250(page) {
    return axios.get(base.baseUrl + "/top250/" + page);
  },
  carousel() {
    return axios.get(base.baseUrl + "?type=carousel");
  },
  getCelebrity(id) {
    return axios.get(base.baseUrl + "/celebrity/" + id);
  },
  getSuggest(word) {
    return axios.get(base.baseUrl + "/search/key/" + word);
  },
  getApi(url) {
    return axios.get(base.baseUrl + "/play?url=" + url);
  },
};

const sitename = "苍穹影视";
const version = "1.5.1";
const email = "xhapame@gmail.com";
const beian = "蜀ICP备18000550号";
if (VueCookies.isKey('toolbar_color')) {
  var toolbar_color = "#" + VueCookies.get("toolbar_color");
} else {
  toolbar_color = "#3F51B5";
}
const intro_color = "teal";
const comment_color = "teal";
const play_origin_color = "teal";

export default {
  api,
  sitename,
  version,
  email,
  beian,
  toolbar_color,
  intro_color,
  comment_color,
  play_origin_color,
};