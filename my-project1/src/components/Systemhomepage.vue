<template>
<el-container style="height:100%;" direction="vertrcal">
  <el-header height="50px" >
      <div class="header"><i class="el-icon-share"></i>系统管理员&nbsp;&nbsp;&nbsp;<i class="el-icon-tickets"></i>  <i class="el-icon-minus"></i> <i class="el-icon-close"></i></div>
      </el-header>
  <el-main> 
  </el-main>
  <el-footer>
    
    <el-menu 
    :default-active="$route.path" 
    background-color=""
     class="el-menu-demo"
      mode="horizontal"
      active-text-color="#00FF00"
       @select="handleSelect"
    
       >
    <el-menu-item index="1"  ><i class="el-icon-delete"></i>系统主页</el-menu-item>
    <el-menu-item index="/about" ><i class="el-icon-delete"></i>状态监测</el-menu-item>
    <router-link to="/Checkstatus" tag="el-menu-item">123</router-link>
    <el-menu-item index="3" ><i class="el-icon-delete"></i>蜜网构建</el-menu-item>
    <el-menu-item index="4"><i class="el-icon-delete"></i>应用蜜罐</el-menu-item>
    <el-menu-item index="5"><i class="el-icon-delete"></i>主机蜜罐</el-menu-item>
    <el-menu-item index="6"><i class="el-icon-delete"></i>平台管理</el-menu-item>
    </el-menu>
  </el-footer>
</el-container>
</template>
<style>
    .el-header{
        background-color: rgb(10, 10, 10);
        color: rgb(252, 249, 249);
        text-align: center;
        line-height: 60px;
        
         }
    .header{
        font-family: "微软雅黑";
        float:right;
    }
</style>
