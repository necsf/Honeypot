<template>
<div class="biggest" style="overflow:-Scroll;overflow-x:hidden;overflow-y:hidden">
    <div class="page">
        <img class="logo"  src="../assets/elex.png"/>
    </div>
    <div class="login">
        <div class="first">
            <img  class="name" src="../assets/name.png"/>
            <el-input class="kuang1" size="large" v-model="input" style="width:270px" ></el-input>
        </div>

        <div class="second">
            <img  class="password" src="../assets/password.png"/>
            <el-input class="kuang2" v-model="input" style="width:270px" ></el-input>
        </div>

        <div class="ss">&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button  type="danger" class="loginbutton" style="width:273px" >&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;</el-button>
        </div>

    </div>

</div>

</template>


<style scoped>
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

    .loginbutton{
    background-color:#e95513;
    color: #eeeeee;
  }

.biggest{
    width:100%;
    height:800px;
    background:url("../assets/back.jpg");
}
.page{
    position: relative;
    top:120px;
}
.login{
    position: relative;
    left:1300px;
    top:150px;
}
.name{
    position: relative;
    top:18px;
}
.password{
    position: relative;
    top:20px;
    right:8px;
}
.kuang1{
    position: relative;
    left:5px;

}
.ss{
    position: relative;
    top:15px;
    left:30px;
}


</style>

<script>
export default {

}
</script>

