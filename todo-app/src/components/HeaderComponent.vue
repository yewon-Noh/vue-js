<template>
  <header class="header">
    <h1>todos</h1>
    <input 
      class="new-todo"
      autofocus 
      autocomplete="off" 
      placeholder="What needs to be done?"
      v-model="text"
      @keypress="handleTodo"
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    handleTodo({ keyCode }) {
      const { text } = this;

      if (keyCode === 13 && text !== "") {
        this.$emit("insertTodo", text);    // 부모 컴포넌트로 변경값 보내기
        this.text = "";
      }
    }
  }
};
</script>

<style scoped>
h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>