// 入口文件

// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false


// 创建Vue对象
new Vue({
    el: '#app',
    render: h => h(App),
    // mounted() {
    //     // 3秒后自动销毁
    //     setTimeout(() => {
    //         this.$destroy();
    //     }, 3000);
    // }
});

