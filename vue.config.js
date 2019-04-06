module.exports = {
  devServer: {
    proxy:{
     // 当你请求是以/api开头的时候，则我帮你代理访问到http://localhost:3000
     // 例如：
            // /api/users  http://localhost:3000/api/users
            // 我们真是服务器接口是没有/api的 
            "/api":{
                target:"http://f.cn",
                pathRewrite:{"^/api":""}
            }
        }
  }
}