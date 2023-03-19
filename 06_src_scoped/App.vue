<template>
  <div>
    <h1 class="title">Hello</h1>
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style lang="less">
.title {
  color: red;
}
</style>
