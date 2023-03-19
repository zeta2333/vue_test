// 入口文件

// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 创建Vue对象
import { hunhe, hunhe2 } from './mixin'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 全局混合
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
    el: '#app',
    render: h => h(App)
});

