const express = require('express');
const app = express();
const cors = require('cors');
// 引入 path 模块
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
// 注册 art-template 模板引擎
app.engine('art', require('express-art-template'));

// 设置模板引擎的默认后缀为 ".art"
app.set('view engine', 'art');
app.set('x-powered-by', false);

// 允许跨域请求
app.use(cors());


// 挂载静态文件
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// 路由挂载
const homeIndex = require('./routes/index.js');// 影讯（首页）
const selectMovie = require('./routes/select-movie.js'); // 选电影

app.get('/', homeIndex);
app.get('/select-movie', selectMovie);



// 引入配置文件
const { port } = require(path.join(__dirname, './configs/index.json'));
// 引入路由配置文件
const routes = require(path.join(__dirname, './configs/routes.json'));








app.listen(port, function () {
    console.log(port, 'http://localhost:' + port);
})