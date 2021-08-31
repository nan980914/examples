<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    {{this.$store.getters.myName}}
    {{this.$options.name}}
    <hr>
    {{this.$store.state.age}}
    <button @click="add">Add</button>
    <button @click="sub">Sub</button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // console.log("this.$store===", this.$store.state);
  },
  methods: {
    add() {
      this.$store.commit('addAge',1)
    },
    sub() {
      this.$store.dispatch('asyncSub',2)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
