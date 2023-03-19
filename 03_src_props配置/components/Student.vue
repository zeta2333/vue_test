<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge()">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "欢迎来到苏科大学习！",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //简单声明接收
  // props: ["name", "age", "gender"],
  //接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   gender: String,
  // },
  //接收的同时对数据进行类型限制，以及默认值的设置和必要性的设置
  props: {
    name: {
      type: String, //类型
      required: true, //必要的
    },
    age: {
      type: Number,
      default: -1,
    },
    gender: {
      type: String,
      required: true,
    },
  },
};
</script>