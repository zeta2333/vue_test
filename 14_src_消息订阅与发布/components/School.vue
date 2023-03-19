<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "USTS",
      address: "Suzhou",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log(this);
      console.log("我是School组件,我订阅到", msgName, "消息,消息内容为", data);
    },
  },
  mounted() {
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School,收到数据:", data);
    // });
    // this.pubId = pubsub.subscribe("hello", (msgName, data) => {
    //   console.log(this);
    //   console.log("我是School组件,我订阅到", msgName, "消息,消息内容为", data);
    // });
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>