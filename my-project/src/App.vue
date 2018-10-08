<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
    import "./assets/css/new.css";
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
  @font-face {
    font-family: 'iconfont';  /* project id 796633 */
    src: url('//at.alicdn.com/t/font_796633_b3c1isjjwu.eot');
    src: url('//at.alicdn.com/t/font_796633_b3c1isjjwu.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_796633_b3c1isjjwu.woff') format('woff'),
    url('//at.alicdn.com/t/font_796633_b3c1isjjwu.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_796633_b3c1isjjwu.svg#iconfont') format('svg');
  }


  .iconfont{
    font-family:"iconfont" !important;
    font-size:36px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0px;
    color:#76EE00;
  ;}

  /* *********************************************mian start*****************/
  /* 绿色字体 */
  .wow{
    position: relative;
    bottom:15px;
  }

  .p-2{
    position: relative;
    top: 10px;
    font-size: 18pt;
    font-weight: bold;
    left: 20px;
    font-family: '微软雅黑';
    margin: 0;

  }
  /* 白色条框 */
  .header-2{
    margin: 0;
    height:60px;
    width:100%;
    color:black;
    font-weight: 500;
    overflow: hidden;
  }

  /*---------------------------------------------------------------------------------------------------------------------*/

  /*-------------------------------------------暂时修改到这里*/
  /********************************** 查看详情的颜色 */



</style>
