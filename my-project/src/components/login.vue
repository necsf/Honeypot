<template>
<el-container style="height:100%;" direction="vertrcal">
  <el-aside width="60%">
      <div class="logo">
          <i class="el-icon-success"></i>
            <div class="name" style="color:white">ELE
                <span style="color:blue">X</span>博智
            </div>
            <div class="line">
                    |
                    <i class="el-icon-printer"></i>
                    <span class="kuang" style="font-size:40px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能网络蜜罐系统</span>
            </div>      
      </div>
      <div class="vuesb">
                博智
            </div>
  </el-aside>
  <el-main class="main1">
      <div class="kuang">
          <i class="el-icon-service">
              <el-input v-model="input" style="width:240px "></el-input></i>
          
           <i class="el-icon-view">
               <el-input v-model="input" style="width:240px " ></el-input>
               <div class="bottom">

                    <el-button type="danger" >&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;</el-button>
                    <el-button type="info">&nbsp;&nbsp;&nbsp;&nbsp;退出&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
   


               </div>
           </i>
      

      </div>

  </el-main>
</el-container>






    
</template>
<style>
 .el-aside {
    background-color: rgb(45,45,45);
    color:white;
    text-align: left;
    
  }
  
  .main1 {
    background-color:rgb(45,45,45);
    color: white;
    text-align: left;
    line-height: 160px;
  }
  .logo{
      color:rgb(0,159,232);
      font-size:80px;
      padding-left:140px;
      padding-top: 20px;
  }
  .name{
        position: absolute;
        left:60px;
        right:auto;
        top: 100px;
        font-size:60px;
  }
  .line{
        position: absolute;
        left:340px;
        right:auto;
        top: 0px;
        font-size:140px;
        color:rgb(255,255,255);

  }
  .el-icon-printer{
      color:chocolate;
      position: absolute;
      left:20px;
      top:40px;
    
  }
  .vuesb{
      position: absolute;
        left:500px;
        right:auto;
        top: 0px;
        font-size:80px;
        color:white;

  }
  .el-icon-service{
      font-size: 35px;
      color:chocolate;
       position: absolute;
        top:320px


  }
  .el-icon-view{
      font-size: 35px;
      color:chocolate;
       position: absolute;
        top:390px;

  }
  .bottom{
      position: absolute;
      left:50px;

  }



</style>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}


</script>
