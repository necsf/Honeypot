<template>
    <el-container style="height:100%; width:100% overflow-y:hidden; " direction="vertrcal">
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
    <el-main class="ttt">
        <router-view></router-view>
    </el-main>
  <el-footer class="nmd">
      <hr class="image"/>
    
    
         <el-menu
       :default-active="$route.name"
       background-color=""
       mode="horizontal"
       active-text-color="#5EBF18"

       @select="handleSelect"
        router
        class="font"
       >
    <el-menu-item  index="systemindex"><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe61f;</i>系统主页</p></el-menu-item>
    <el-menu-item index="Checkstatus1" ><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe61a;</i>监测状态</p></el-menu-item>
    <el-menu-item index="honeybuild" ><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe603;</i>蜜网构建</p></el-menu-item>
    <el-menu-item index="applyhoney"><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe651;</i>应用蜜罐</p></el-menu-item>
    <el-menu-item index="Hosthoneypot"><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe652;</i>主机蜜罐</p></el-menu-item>
    <el-menu-item index="Operator"><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe652;</i>样本操作</p></el-menu-item>
    <el-menu-item index="honeycontrol"><p class="menu-1" style="font-size:18pt"><i class="iconfont">&#xe606;</i>平台管理</p></el-menu-item>
    </el-menu>
    <div class="footer-1">
        <p class="footer-p"> <i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;监测状态：</p>
        <p class="footer-p2">登录时间:&nbsp;&nbsp;{{date|formatDate}}</p>
        
    </div>
  

  </el-footer>
</el-container>
</template>
<style scoped>

 header.el-header
{
    padding-left: 0px;
    padding-right: 0px;
}


@font-face {
  font-family: 'iconfont';  /* project id 789791 */
  src: url('//at.alicdn.com/t/font_789791_1n8tl020l1l.eot');
  src: url('//at.alicdn.com/t/font_789791_1n8tl020l1l.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_789791_1n8tl020l1l.woff') format('woff'),
  url('//at.alicdn.com/t/font_789791_1n8tl020l1l.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_789791_1n8tl020l1l.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
     font-size:36px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0px;
    ;}
 

        /* ***********************head开始*********************** */
        /* 黑色条框 */
        html { 
            overflow-y:hidden; 
            overflow-x:hidden;
            margin-left: 0px;
        }
        hr{
            margin-top: 0px;
        }
       .ttt{
           padding: 0px;
       }
        .smallpeople{
            position: relative;
            top:6px;
        }
        .el-dropdown-link{
             position: relative;
             bottom:5px;
        }
        span.lefttop{
            text-align: left;
            margin-right:1600px;
              position: relative;
              bottom:45px;    

        }   
        .nmd{
            padding:0;
        }
        
    .header-1{
        text-align: right;
        background-color:rgb(21,21,21);
        color: rgb(252, 249, 249);
        height: 80px;
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
        font-weight: normal;
        margin: 0;
    }
    .footer-2,.footer-1{
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
import {formatDate} from './common/date.js';
export default {
    data(){
        return{
            date:{}
        }

    },
  mounted: function () {
    var _this = this;
    setInterval(function(){
      _this.date = new Date();  //修改数据date
    },1000)

  },

  filters:{
    formatDate(time) {
      var data = new Date(time);
      return formatDate(time, 'yyyy-MM-dd hh:mm');
    }
  }

}
</script>
