<template>
  <div>
    <h2 >学生姓名：{{ name }}</h2>
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
      x: 233,
    };
  },
};
</script>