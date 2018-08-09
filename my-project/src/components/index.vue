
<template >
    <el-container style="height:100%;overflow-y:hidden">
        <!--******************************* head -->
        <el-header height=90px >
      <div class="header-1">
          <p class="ps-1">
               <el-dropdown>
                  <span class="el-dropdown-link" >
                        <i class="el-icon-share"></i>
                        系统管理员&nbsp;{{administrator}}&nbsp;
                  </span>
                   <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>注销账号</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="el-icon-tickets"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>资质</el-dropdown-item>
                        <el-dropdown-item>帮助</el-dropdown-item>
                        <el-dropdown-item>关于</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
          </p>
          <!-- <i class="el-icon-minus"></i> <i class="el-icon-close"></i>     减号和X号 -->
          </div>

      </el-header>
    <el-main  >
        <router-view></router-view>
    </el-main>
  <el-footer  >
    <hr/>
    <el-menu
    :default-active="$route.name"
    background-color=""
       mode="horizontal"
     active-text-color="#76EE00"
       @select="handleSelect"
        router
       >
    <el-menu-item  index="systemindex"><p class="menu-1"><i class="el-icon-delete"></i>系统主页</p></el-menu-item>
    <el-menu-item index="Checkstatus1" ><p class="menu-1"><i class="el-icon-delete"></i>监测状态</p></el-menu-item>
    <el-menu-item index="honeybuild" ><p class="menu-1"><i class="el-icon-delete"></i>蜜网构建</p></el-menu-item>
    <el-menu-item index="applyhoney"><p class="menu-1"><i class="el-icon-delete"></i>应用蜜罐</p></el-menu-item>
    <el-menu-item index="Hosthoneypot"><p class="menu-1"><i class="el-icon-delete"></i>主机蜜罐</p></el-menu-item>
    <el-menu-item index="honeycontrol"><p class="menu-1"><i class="el-icon-delete"></i>平台管理</p></el-menu-item>
    </el-menu>
    <div class="footer-1">

        <p class="footer-p"> <i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;监测状态：</p>
        <p class="footer-p2">登录时间:&nbsp;&nbsp;{{times}}</p>
    </div>
  </el-footer>
</el-container>

</template>
<style scoped>
html{
    overflow-y:hidden;
}

        /* ***********************head开始*********************** */
        /* 黑色条框 */
        
        .el-footer{
     margin-bottom: 43.1px;
 }
    .header-1{
                 text-align: right;
        background-color:#262626;
        color: rgb(252, 249, 249);
        height: 100px;
        font-family: "微软雅黑";
        width: 100%;
    }
    /* 黑色管理员 */
    .el-dropdown-link{
        color: rgb(252, 249, 249);
        font-size: 14pt;
    }
    .ps-1{
        position: relative;
        right:80px;
        top: 27px;
    }
    /* ***********************************head end */
/* ****************************************foot */
 .el-footer{
     margin-bottom: 43.1px;
 }
 .menu-1{
        font-size: 15pt;
        margin: 0;
    }
    .footer-1{
        width: 100%;
        height: 25px;
        margin: 0;
        background-color: #515151;
    }
   .footer-p{
       margin: 0;
       position: relative;
       left: 35px;
       top:4px;
       font-size: 12px;
       font-family: 'Microsoft YaHei';
       color:aliceblue;
       float: left;
   }
   .footer-p2{
       position: relative;
       right: 35px;
       top:4px;
       font-size: 12px;
       font-family: 'Microsoft YaHei';
       color:aliceblue;
       margin: 0;
       float: right;
   }
   /* ***************************************foot end */
</style>
<script>
export default {
    data(){
        return{
            times:'2018-1-2'
        }

    },

}
</script>
