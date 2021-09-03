<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    console.log('created')
  },
  mounted () {
    console.log('home====',this.$router)
  }
}
</script>
