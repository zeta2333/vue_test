export default {
    install(Vue, x, y, z) {
        console.log(x, y, z);
        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })


    }
}