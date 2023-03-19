<template>
  <div class="app">
    <h1>Hello,学生姓名为：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用v-on或@） -->
    <!-- <Student @duck="getStudentName" /> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：使用ref）-->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  data() {
    return {
      studentName: "",
    };
  },
  components: {
    Student,
    School,
  },
  methods: {
    show() {
      alert(123);
    },
    getSchoolName(name) {
      console.log("App收到了学校名:", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名:", name);
      this.studentName = name;
    },
    m1() {
      console.log("m1方法被调用了");
    },
  },
  mounted() {
    this.$refs.student.$on("duck", this.getStudentName); //绑定自定义事件
    // this.$refs.student.$on("duck", this.getStudentName);  //绑定自定义事件（一次性）
  },
};
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
