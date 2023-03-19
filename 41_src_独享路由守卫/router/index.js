//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建并暴露路由
const router = new VueRouter({
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: "主页" },
            // 检测到children配置即自动添加'/'，所以子路由不需要添加'/'
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: "新闻"
                    },
                    beforeEnter(to, from, next) {
                        console.log("前置路由守卫", to, from);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === "USTS") next()
                            else alert("学校名不对，无权限查看")
                        } else next()
                    },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: "消息"
                    },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: {
                                isAuth: true,
                                title: "详情"
                            },
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: "关于" },
        }
    ]
})


//全局前置路由守卫————初始化的时候&每次切换路由前被调用
/* router.beforeEach((to, from, next) => {
    console.log("前置路由守卫", to, from);

    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === "USTS")
            next()
        else
            alert("学校名不对，无权限查看")
    } else {
        next()
    }

}) */

//全局后置路由守卫————初始化的时候&每次切换路由后被调用
router.afterEach((to, from) => {
    console.log("后置路由守卫", to, from);
    document.title = to.meta.title || 'root';
})

export default router