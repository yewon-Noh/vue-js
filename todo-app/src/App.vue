<template>
  <div id="app">
    <section class="todoapp">
      <!-- 부모에서 이벤트 등록 (v-on 단축해서 @로 사용) -->
      <Header @insertTodo="insertTodo" />
      <Todo 
        :todos=todos 
        @removeTodo="removeTodo" 
        @updateDone="updateDone" 
        @updateTodo="updateTodo" />
      <Footer :size="todos.length" />
    </section>

  </div>
</template>

<script>
import "./assets/css/main.css";

import Header from "./components/HeaderComponent";
import Todo from "./components/TodoComponent";
import Footer from "./components/FooterComponent";

export default {
  components: {
    Header,
    Todo,
    Footer
  },
  data() {
    return {
      todos: [
        {
          id: new Date(),
          text: "Vue 공부하기",
          isDone: true
        },
        {
          id: new Date() + 1,
          text: "치킨 먹기",
          isDone: false
        }
      ]
    }
  },
  methods: {
    insertTodo(text) {
      this.todos = [
        ...this.todos,   // 기존 배열에 새로운 todo 추가
        {
          id: new Date().getTime(),
          text,
          isDone: false
        }
      ]
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    updateDone(id) {
      const todos = [...this.todos];
      const todo = todos.find(todo => todo.id === id);

      if (todo) {
        todo.isDone = !todo.isDone;
        this.todos = todos;
      }
    },
    updateTodo({ id, text }) {
      const todos = [...this.todos];
      const todo = todos.find(todo => todo.id === id);

      if (todo) {
        todo.text = text;
        this.todos = todos;
      }
    }
  }
};
</script>

<style>
</style>
