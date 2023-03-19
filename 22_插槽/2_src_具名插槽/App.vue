<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="img" />
      <a slot="footer" href="https://www.bilibili.com/v/food/" target="_blank">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">
          {{ g }}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.bilibili.com/v/game/" target="_blank">单机游戏</a>
        <a href="https://www.bilibili.com/v/game/" target="_blank">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" :listData="films">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a slot="footer" href="https://www.bilibili.com/movie" target="_blank">经典</a>
          <a slot="footer" href="https://www.bilibili.com/movie" target="_blank">热门</a>
          <a slot="footer" href="https://www.bilibili.com/movie" target="_blank">推荐</a>
        </div>
        <h4>欢迎前来观影~</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  data() {
    return {
      foods: ["火锅", "烧烤", "麻辣烫", "炸鸡"],
      games: ["原神", "星穹铁道", "绝区零", "未定事件簿"],
      films: [
        "《肖申克的救赎》",
        "《霸王别姬》",
        "《阿甘正传》",
        "《泰坦尼克号》",
      ],
    };
  },
  components: {
    Category,
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>

