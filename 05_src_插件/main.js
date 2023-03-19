// 入口文件

// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入插件
import plugins from './plugins';

// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用（使用）插件
Vue.use(plugins,1,2,3)

// 创建Vue对象
new Vue({
    el: '#app',
    render: h => h(App)
});

