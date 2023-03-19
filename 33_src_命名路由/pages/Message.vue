<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 路由跳转并携带query参数：to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
                    {{ m.title }}
                </router-link> -->
                <!-- 简化前：需要写完整的路径 -->
                <router-link to="/home/message/detail"></router-link>
                <!-- 简化后：写name即可 -->
                <router-link :to="{ name: 'xiangqing' }"></router-link>
                <!-- 路由跳转并携带query参数：to的对象写法 -->
                <router-link :to="{
                    name: 'xiangqing',
                    // path: '/home/message/detail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Message",
    mounted() {
        console.log("Message挂载完毕");
    },
    data() {
        return {
            messageList: [
                { id: '001', title: '消息1' },
                { id: '002', title: '消息2' },
                { id: '003', title: '消息3' },
            ]
        }
    },
}
</script>
