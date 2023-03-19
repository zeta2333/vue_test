<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 路由跳转并携带params参数：to的对象写法 -->
                <!-- 该写法不可以用path参数，必须用name参数 -->
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
