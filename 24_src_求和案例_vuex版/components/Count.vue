<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }} </h3>
    <h3>我在{{ school }}，学习{{ subject }} </h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <button @click="addIfOdd">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1//用户选择的数字
    }
  },
  methods: {
    add() {
      this.$store.commit('JIA', this.n);
    },
    subtract() {
      this.$store.commit('JIAN', this.n);
    },
    addIfOdd() {
      this.$store.dispatch('jiaOdd', this.n);
    },
    addWait() {
      this.$store.dispatch('jiaWait', this.n);
    }
  },
  computed: {
    // 手写计算属性
    // he() {
    //   return this.$store.state.sum
    // },
    // xuexiao() {
    //   return this.$store.state.school
    // },
    // xueke() {
    //   return this.$store.state.subject
    // },
    // dahe() {
    //   return this.$store.getters.bigSum
    // },
    //借助mapState生成state中的属性(对象写法)
    // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),
    //借助mapState生成state中的属性(数组写法)
    ...mapState(['sum', 'school', 'subject']),
    /************************************************ */
    //借助mapGetters生成getters中的属性
    ...mapGetters(['bigSum'])
  },
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>