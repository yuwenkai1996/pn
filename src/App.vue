<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
  *{
    padding:0;
    margin:0;
  }
  li{
    list-style: none;
  }
  body,html{
    background: #f2f2f2;
    font-size: 14px;
    height: 100%;
  }
  a{
    text-decoration: none;
  }
</style>
