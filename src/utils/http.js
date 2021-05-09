import axios from "axios";
import qs from "querystring";

const errorHandle = (status,other) =>{
    switch(status){
        case 400:
            console.log("服务器请求限制");
            break;
        case 401:
            console.log("用户信息验证失败");
            break;
        case 403:
            console.log("请求被限制");
            break;
        case 404:
            console.log("客户端错误");
            break;
        default:
            console.log(other);
            break;
    }
}

const instance = axios.create({
  timeout: 12000,
});

instance.defaults.baseURL = "";
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

instance.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        const {response} = error;
        if(response){
            errorHandle(response.status,response.data)
            return Promise.reject(response)
        }else{
            alert('Sorry,There\'s something wrong!')
        }
    }
);

export default instance