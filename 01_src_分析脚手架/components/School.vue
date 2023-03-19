<template>
  <div class="demo">
    <h2>学校名：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "USTS",
      address: "Suzhou",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>