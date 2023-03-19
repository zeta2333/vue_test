<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <!-- 使用v-model需要计算属性的完整形式 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "checkAllTodo", "deleteAllDone"],
  computed: {
    // 总数
    total() {
      return this.todos.length;
    },
    // 统计已选择的
    doneTotal() {
      // reduce统计
      return this.todos.reduce(
        (pre, curObj) => pre + (curObj.done === true ? 1 : 0),
        0
      );
    },
    //是否全选
    // 计算属性的完整形式（包含getter和setter）
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(val) {
        this.checkAllTodo(val);
      },
    },
  },
  methods: {
    clearAll() {
      // 将所有done值为true的todo删除
      this.deleteAllDone();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>