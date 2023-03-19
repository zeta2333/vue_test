<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="center">default-text-center</slot>
    <slot name="footer">default-text-footer</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  background-color: orange;
  text-align: center;
}
</style>