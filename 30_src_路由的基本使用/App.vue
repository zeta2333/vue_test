<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中借助a标签实现页面的跳转 -->
          <!-- Vue中借助 router-link 实现路由的切换-->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 借助router-view指定组件的生成位置 -->
            <router-view> </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
export default {
  name: "App",
  components: {
    Home, About
  }
};
</script>

