<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "Pycro",
      gender: "male",
      x: 233,
    };
  },
  mixins: [hunhe, hunhe2],
  mounted() {
    console.log("Hello!!!!");
  },
};
</script>