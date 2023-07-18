<template>
  <div id="app">
    {{ message }}
    <h2>뒤집힌 message</h2>
    {{ reversedMessage }}
  </div>
  <br>
  <div>
    <input v-model="firstname" />
    <input v-model="lastname"/>

    <h2>full name</h2>
    <span>{{ fullname }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: 'Hello Vue!!',
      firstname: '',
      lastname: '',
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("")
    },
    fullname() {
      return `${this.firstname} ${this.lastname}`
    }
  },
}
</script>

<style scoped>
</style>