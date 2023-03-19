<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo" />
        <TodoList :todos="todos" />
        <TodoFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :deleteAllDone="deleteAllDone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 修改done值
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 修改title
    editTitle(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
    // 删除
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 删除所有已完成的任务
    deleteAllDone() {
      this.todos.forEach((todo) => {
        if (todo.done) this.deleteTodo(todo.id);
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("editTitle", this.editTitle);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    // (_,data)下划线占位
    this.pubId = pubsub.subscribe("deleteTodo", (_, data) =>
      this.deleteTodo(data)
    );
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("editTitle");
    // this.$bus.$off("deleteTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-edit {
  color: #fff;
  background-color: rgb(103, 194, 58);
  border: 1px solid rgb(78, 146, 43);
  margin-right: 5px;
}
.btn-edit:hover {
  color: #fff;
  background-color: rgb(78, 146, 43);
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
