<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="img" />
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(g, index) in games" :key="index">
          {{ g }}
        </li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
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
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>

