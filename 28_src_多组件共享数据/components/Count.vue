<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }} </h3>
    <h3>我在{{ school }}，学习{{ subject }} </h3>
    <h3>Person组件的总人数是: <span style="color:red"> {{ personList.length }}</span></h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="subtract(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1//用户选择的数字
    }
  },
  methods: {
    //借助mapMutations生成commit(对象写法)
    ...mapMutations({ add: 'JIA', subtract: 'JIAN' }),

    // 借助mapActions生成dispatch(对象写法)
    ...mapActions({ addOdd: 'jiaOdd', addWait: 'jiaWait' }),

  },
  computed: {
    //借助mapState生成state中的属性(数组写法)
    ...mapState(['sum', 'school', 'subject', 'personList']),
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