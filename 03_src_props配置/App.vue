<template>
  <div>
    <!-- :xxx数据绑定，引号内会被当做表达式解析 -->
    <Student name="Leah" gender="female" :age="18" />
  </div>
</template>

<script>
import Student from "./components/Student";
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>
