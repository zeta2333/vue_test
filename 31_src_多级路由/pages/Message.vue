<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <a href="#">{{ m.title }}</a>&nbsp;&nbsp;
                <a href="#">123</a>&nbsp;&nbsp;
            </li>
        </ul>
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
