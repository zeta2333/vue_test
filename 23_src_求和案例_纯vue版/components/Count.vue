<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
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
export default {
  name: "Count",
  data() {
    return {
      sum: 0,//当前的和
      n: 1//用户选择的数字
    }
  },
  methods: {
    add() { this.sum += this.n },
    subtract() { this.sum -= this.n },
    addIfOdd() {
      if (this.sum % 2) this.sum += this.n
    },
    addWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 500);
    }
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>