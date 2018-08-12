<template>
    <el-container style="height:100%; overflow-y:hidden; " direction="vertrcal">
        <!--******************************* head -->
        <el-header height=80px; >
      <div class="header-1">
          
          <p class="ps-1">
    
               <el-dropdown>
                  <span class="el-dropdown-link" >
                      <span class="smallpeople">
                        <img src="../assets/smallpeople.png"/></span>
                        <span style="color:grey ;font-size:14pt">系统管理员[SysAdmin]</span>&nbsp;{{administrator}}&nbsp;
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
             <span class="lefttop">
              <img src="../assets/lefttop.png"/>
          </span>
         
          
          
          <!-- <i class="el-icon-minus"></i> <i class="el-icon-close"></i>     减号和X号 -->
          </div>
         

      </el-header>
    <el-main class="tmd">
        <router-view></router-view>
    </el-main>
  <el-footer class="nmd">
      <hr class="image"/>
    <el-menu
    :default-active="$route.name"
    background-color=""
       mode="horizontal"
     active-text-color="#76EE00"
       @select="handleSelect"
        router
        class="font"
       >
    <el-menu-item  index="systemindex"><p class="menu-1" style="font-size:18pt"><img src="../assets/bottom1.png" />系统主页</p></el-menu-item>
    <el-menu-item index="Checkstatus1" ><p class="menu-1" style="font-size:18pt"><img src="../assets/bottom2.png" />监测状态</p></el-menu-item>
    <el-menu-item index="honeybuild" ><p class="menu-1" style="font-size:18pt"><img src="../assets/bottom3.png" />蜜网构建</p></el-menu-item>
    <el-menu-item index="applyhoney"><p class="menu-1" style="font-size:18pt"><img src="../assets/bottom4.png" />应用蜜罐</p></el-menu-item>
    <el-menu-item index="Hosthoneypot"><p class="menu-1" style="font-size:18pt"><img src="../assets/bottom5.png" />主机蜜罐</p></el-menu-item>
    <el-menu-item index="honeycontrol"><p class="menu-1" style="font-size:18pt"><img src="../assets/bottom6.png" />平台管理</p></el-menu-item>
    </el-menu>
    <div class="footer-1">

        <p class="footer-p"> <i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;监测状态：</p>
        <p class="footer-p2">登录时间:&nbsp;&nbsp;{{times}}</p>
    </div>
  </el-footer>
</el-container>
</template>
<style scoped>

        /* ***********************head开始*********************** */
        /* 黑色条框 */
        html { overflow-y:hidden; overflow-x:hidden;}
        hr{
            
    margin-top: 0px;


        }
       
        .smallpeople{
            position: relative;
            top:6px;
        }
        .el-dropdown-link{
             position: relative;
             bottom:20px;
          
        }
        span.lefttop{
            text-align: left;
            margin-right:1400px;
              position: relative;
              bottom:45px;    

        }
        .tmd{
            padding: 0;
        }
        .nmd{
            padding:0;
        }
        
    .header-1{
        text-align: right;
        background-color:rgb(21,21,21);
        color: rgb(252, 249, 249);
        height: 65px;
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
   .el-footer{

        margin-bottom:40px;


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
