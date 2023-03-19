<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "About",
    // 组件内的路由守卫，当进入组件时调用
    beforeRouteEnter(to, from, next) {
        console.log("About---beforeRouteEnter", to, from);
        if (to.meta.isAuth) {//判断是否需要鉴权
            if (localStorage.getItem('school') === "USTS") next()
            else alert("学校名不对，无权限查看")
        } else next()
    },
    // 组件内的路由守卫，当离开组件时调用
    beforeRouteLeave(to, from, next) {
        console.log("About---beforeRouteLeave", to, from);
        next()
    }
}
</script>

