<template>
  <div class="demo">
    <h2 class="sname">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Pycro",
      gender: "male",
    };
  },
};
</script>
<style scoped lang="less">
.demo{
  background-color: skyblue;
  .sname{
    font-size: 40px;
  }
}
</style>