//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import Home from '../components/Home'
import About from '../components/About'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})