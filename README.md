## 食用方法

1. 在 Windows 下安装好 npm
2. 在你喜欢的目录下下载文件

    拥有 git 可以直接运行命令
    ```
    git clone https://github.com/xhboke/douban-movie
    ```
3. 下载依赖
    在你喜欢的目录下运行命令
    ```
    npm run serve
    ```
4. 本地运行项目
    在你喜欢的目录下运行命令
    ```
    npm run serve
    ```
    此时命令行会提示 `http://localhost:8080/` 说明前端构建成功，访问会提示请求失败（因为没有后端的数据）
5. 构建后端 API
   * 下载所需文件：https://github.com/xhboke/douban
   * 将 `index.php` 文件和 `class` `.cache` 目录上传到云服务器，或者是本地服务器（127.0.0.1/localhost），注意需要用二级目录（即 `http://域名//douban/`）  
   * 此时访问 http://域名/index.php?type=info&id=30228394 显示数据说明已经成功。
   * 此时访问 `http://localhost:8080/` 即可正常显示。
6. 在前端目录 `src/api/global_variable.js` 中配置相关站点信息。
7. 配置到服务器
    * 在你喜欢的目录的目录下运行命令进行编译
        ```
        npm run build
        ```
    * 此时会生成目录 `dist` ，将 `dist` 目录中的所有文件和上面的 `douban` 文件夹一同上传至根目录。

    * 配置伪静态规则
        ```
        location / {
        try_files $uri $uri/ /index.html;
        }
        ```

## 成品展示

![图片alt](https://i.loli.net/2021/08/01/D25HQ69ySLn8Ubl.png)
