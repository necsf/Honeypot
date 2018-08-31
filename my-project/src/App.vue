<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app {
  max-width: 1920px;
  max-height: 1080px;
  height: 100%;
  margin:0 auto;
  font-family: 'Microsoft Yahei' !important;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y:hidden; 
  overflow-x:hidden;  
  
}

 


</style>
