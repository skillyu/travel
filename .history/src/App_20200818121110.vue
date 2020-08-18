<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home/Home'
export default {
  name : "app",
  data(){
    return{

    }
  },
  components: {
   Home : Home
  }
}
</script>
<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
