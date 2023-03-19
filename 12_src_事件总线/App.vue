<template>
  <div class="app">
    <h1>Hello</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Student,
    School,
  },
};
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
