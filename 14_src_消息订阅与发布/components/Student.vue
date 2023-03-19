<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendStudentName">点我发送学生名</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    sendStudentName() {
      // this.$bus.$emit("hello", this.name);
      pubsub.publish("hello", this.name);
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