import axios from "../utils/http";
import VueCookies from 'vue-cookies';

const base = {
  baseUrl: "//" + document.domain + "/douban/",
};
const api = {
  search(name, page) {
    return axios.get(base.baseUrl + "?type=search&s=" + name + "&page=" + page);
  },
  info(id, type = true) {
    if (type == true) {
      return axios.get(base.baseUrl + "?type=info&id=" + id);
    } else {
      return axios.get(base.baseUrl + '?type=info&method=1&id=' + id)
    }
  },
  comment(id, page) {
    if (VueCookies.isKey('comment_sort')) {
      return axios.get(base.baseUrl + "?type=comment&id=" + id + "&page=" + page + "&sort=" + VueCookies.get("comment_sort"));
    } else {
      return axios.get(base.baseUrl + "?type=comment&id=" + id + "&page=" + page);
    }
  },
  celebrity(id) {
    return axios.get(base.baseUrl + "?type=celebrity&id=" + id);
  },
  tag(tags, page, sort) {
    return axios.get(
      base.baseUrl +
      "?type=tag&tags=" +
      tags +
      "&page=" +
      page +
      "&sort=" +
      sort
    );
  },
  now_playing() {
    return axios.get(base.baseUrl + "?type=nowplaying");
  },
  index_movie() {
    return axios.get(base.baseUrl + "?type=indexM");
  },
  index_tv() {
    return axios.get(base.baseUrl + "?type=indexT");
  },
  top250(page) {
    return axios.get(base.baseUrl + "?type=top250&page=" + page);
  },
  carousel() {
    return axios.get(base.baseUrl + "?type=carousel");
  },
  getCelebrity(id) {
    return axios.get(base.baseUrl + "?type=celebrity&id=" + id);
  },
  getSuggest(word) {
    return axios.get(base.baseUrl + "?type=search_suggest&name=" + word);
  },
  getApi() {
    return base.baseUrl + "?url=";
  },
};

const sitename = "苍穹影视";
const version = "1.4.1";
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