<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <h2>当前的num值为：{{ num }}</h2>
    <button @click="add">点我num++</button>
    <button @click="sendStudentName">点我传递学生名给App</button>
    <button @click="unbind">点我解绑自定义事件</button>
    <button @click="death">点我销毁Student组件实例对象(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Pycro",
      gender: "male",
      num: 0,
    };
  },
  methods: {
    add() {
      console.log("add被调用了");
      this.num++;
    },
    sendStudentName() {
      // $emit触发绑定事件
      this.$emit("duck", this.name);
      // this.$emit("pick");
    },
    unbind() {
      this.$off("duck"); //解绑单个事件
      // this.$off(["duck", "pick"]); //解绑多个事件
      // this.$off(); //解绑全部事件
    },
    death() {
      this.$destroy(); //销毁了当前Student的组件实例，销毁后实例绑定的自定义事件全部失效。
    },
  },
};
</script>
<style scoped lang="less">
.student {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>