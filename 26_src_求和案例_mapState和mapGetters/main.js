// 入口文件

// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

//引入插件
import vueResource from 'vue-resource'
//引入store
import store from './store'
// 关闭Vue生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)


// 创建Vue对象
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装事件总线
    }
});
