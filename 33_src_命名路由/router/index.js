//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            // 检测到children配置即自动添加'/'，所以子路由不需要添加'/'
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name:'xiangqing',
                            path: 'detail',
                            component: Detail
                        }
                    ]
                },
            ]
        },
        {
            name:'guanyu',
            path: '/about',
            component: About
        }
    ]
})