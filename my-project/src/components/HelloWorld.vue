<template>
  <div>
    <div class="grey"></div>
      <p>
        <i class="el-icon-location" style="color:blue;font-size:70px"></i>
        <strong class="abs" style="color:white;font-size:50px ">ELE<span style=" color:blue">X</span>博智</strong>
      </p>
      <p>
        <i class="el-icon-printer" style="color:orange;font-size:140px"></i>
        <span class="bbs" style="color:white;font-size:40px">博智<span class="bs" style="font-size:20px">TM</span></span>
        <span class="cbs" style="color:white;font-size:80px">
          智能网络蜜罐系统
        </span>
      </p>
    <div class="white"></div>
    <div class='login'>
      <p>
        <i class="el-icon-location-outline"  style="color:blue;font-size:70px;position: absolute;left:80px"></i>
        <span  class="ads" style="font-size:50px ;color:white">ELE<span style="color:blue">X</span>博智</span>
        <span class="bds" style="color:#C0C0C0;font-size:120px">|</span>
        <i class="el-icon-printer" style="color:orange;font-size:140px;position: absolute;left:240px;right:auto;top:450px"></i>
        <span class="cds" style="color:white;font-size:40px">博智<span class="cs" style="font-size:20px">TM</span></span>
        <span class="dds" style="color:white;font-size:50px">
          智能网络蜜罐系统
        </span>
      </p>
      <p>
        <i class="el-icon-service" style="color:orange;font-size:60px"></i>
        <el-input class="name" v-model="input" placeholder="" style="width:300px"></el-input>
        <i class="el-icon-bell" style="color:orange;font-size:60px"></i>
        <el-input class="password" v-model="input" placeholder="" style="width:300px"></el-input>
        <el-button  type="danger" style="position:absolute;left:1120px;right:auto;top: 640px;width:140px">登录</el-button>  
        <el-button type="info"   style="position:absolute;left:1270px;right:auto;top: 640px;width:140px">退出</el-button>


      </p>
    </div>
  </div>
</template>
<style type="text/css">
.grey{
    width:100 %;
    height:350px;
    background:#424242;
  }
  .white{
    width:80%;
    height:70px;
    background:white;
    float: left;
  }
  .login{
    padding-top:0;
    width:100%;
    height:350px;
    background:#424242;
    float: left;
  }
  .el-icon-location{
    position: absolute;
    left:80px;
    right:auto;
    top: 0px;
  }
  .el-icon-printer{
    position: absolute;
    left:750px;
    right:auto;
    top: 150px;
  }
  .el-icon-service{
    position: absolute;
    left:1050px;
    right:auto;
    top: 490px;
  }
  .el-icon-bell{
    position: absolute;
    left:1050px;
    right:auto;
    top: 570px;
  }
  .abs{
    position: absolute;
    left:10px;
    right:auto;
    top: 80px;

  }
  .bbs{
    position: absolute;
    left:900px;
    right:auto;
    top: 140px;
  }
  .bs{
    position: absolute;
    left:80px;
    right:auto;
    top: 0px;
  }
  .cbs{
    position: absolute;
    left:900px;
    right:auto;
    top: 180px;
  }
  .ads{
    position: absolute;
    left:10px;
    right:auto;
    top: 520px;
  }
  .bds{
    position: absolute;
    left:220px;
    right:auto;
    top:420px;
  }
  .cds{
    position: absolute;
    left:380px;
    right:auto;
    top:440px;

  }
  .cs{
    position: absolute;
    left:80px;
    right:auto;
    top: 0px;
  }
  .dds{
    position: absolute;
    left:380px;
    right:auto;
    top: 500px;
  }
  .name{
    position: absolute;
    left:1120px;
    right:auto;
    top: 500px;
  }
  .password{
    position: absolute;
    left:1120px;
    right:auto;
    top: 580px;
  }

  
  
</style>