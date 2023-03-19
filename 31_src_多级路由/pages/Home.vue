<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <!-- 原始方法：通过a标签跳转页面 -->
                <!-- <li>
                    <a class="list-group-item active" href="./home-news.html">News</a>
                </li>
                <li>
                    <a class="list-group-item " href="./home-message.html">Message</a>
                </li> -->

                <!-- 通过route-link 切换组件 -->
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- 指定组件显示的位置 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",

    // mounted() {
    //     console.log("Home组件挂载完毕");
    //     window.homeRoute = this.$route
    //     window.homeRouter = this.$router
    // },
    // beforeDestroy() {
    //     console.log("Home组件即将被销毁");
    // }
}
</script>

