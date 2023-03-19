<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "USTS",
      address: "Suzhou",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("我是School,收到数据:", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>