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
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法，值为对象，会其中所有key-value的值以props的形式传递给Detail组件
                            // props: { a: 1, b: 'hello' }
                            // props的第二种写法,值为布尔，会将所有的params参数以props的形式传递给Detail组件
                            // props:true
                            // props的第三种写法，值为函数，会将对象类型的返回值以props的形式传递给Detail组件
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }

                            // 多级解构赋值，语义化不明确，不常用
                            // props({ query: { id, title } }) {
                            //     return {
                            //         id,
                            //         title,
                            //     }
                            // }
                        }
                    ]
                },
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})