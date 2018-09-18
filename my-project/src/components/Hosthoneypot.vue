<template>
  <el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
    <!-- main -->
    <el-main  class="el-main-1">
      <div class="header-2">
        <p class="p-2"> <i class="iconfont">&#xe652;</i>主机蜜罐
        </p>
      </div>
      <hr style="margin-bottom:0;"/>
      <div class="main-1">
        <el-tabs
          class="tabs-1"
          :tab-position="top"
          type="card"
          @tab-click="handleClick">
          <!-- 主机蜜罐管理 -->
          <el-tab-pane
            label="主机蜜罐管理">
            <div class="tab-1">
              <div class="tab-1-1">

                &nbsp;&nbsp;
                <el-button style="background:#E95513;color:#ffffff;" class="funButton">编辑</el-button>
              </div><!--table-1-1-->
              <div class="tab-1-2">
                <el-table
                  :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                  class="table1"
                  row-style="30px"
                  cell-style="padding:0"
                  id="table11"
                  :data="admindata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  style="width: 100%">
                  <el-table-column
                    prop="id"
                    width="80"
                    label="编号"
                    :index="indexMethod">
                  </el-table-column>
                  <el-table-column
                    prop="ip"
                    label="IP"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    data="null"
                    label="domainID"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="使用者">
                  </el-table-column>
                  <el-table-column
                    prop="operater"
                    label="基本操作">
                    <template slot-scope="scope">
                      <el-button
                        type="text"
                        size="mini"
                        @click="open2">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div><!--table-1-2-->
              <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第{{(currentPage-1) * pagesize +1}}到第{{((currentPage * pagesize)<(admindata.length))?currentPage * pagesize:admindata.length}}条记录，总共{{admindata.length}}条记录
                <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                  <el-option label="10" value="10"></el-option>
                  <el-option label="20" value="20"></el-option>
                </el-select>
                <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;" @click="handleCurrentChange(jumper)">跳转</el-button></span>
              </div>

              <div style="float:right;margin-top:10px;margin-right: 30px;">
                <!-- *********************************分页按钮 -->
                <el-pagination
                  background="#E95513"
                  prev-text="上一页"
                  next-text="下一页"
                  jumper-text="转到"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20]"
                  :page-size="pagesize"
                  :total="admindata.length"
                  layout="slot,prev, pager, next">
                  <!-- <slot name="as">dddd</slot> -->
                </el-pagination>
              </div>
            </div><!--table-1-->
          </el-tab-pane>
          <el-tab-pane label="主机告警分析">

          </el-tab-pane>
          <!-- 原始日志查询 -->
          <el-tab-pane label="原始日志查询" class="origindairy">
            <el-container style="height:100%;" direction="vertrcal">
              <!-- 左侧菜单栏 -->
              <el-aside class="tab-aside" style="width: 220px">
                <!-- <el-col :span="5"> -->
                <el-menu
                  router
                  active-text-color="#E95513"
                  default-active="$route.name"
                  class="el-menu-vertical"
                  @select="handleSelect"
                  @open="handleOpen"
                  @close="handleClose"
                  style="width: 250px;height:100%;background: #f2f2f2; ">
                  <el-submenu index="1">
                    <template slot="title">
                                <span>
                                  <img src="../assets/arrow3.png" class="arrow" />
                                    文件操作信息</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item  class="nav-left" index="fileoperations"><img src="../assets/arrow4.png" class="arrow1"/>文件操作详情</el-menu-item>
                      <el-menu-item class="nav-left" index="filemap"><img src="../assets/arrow4.png" class="arrow1"/>文件map操作详情</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="networkusage">
                    <span slot="title"><img src="../assets/arrow3.png" class="arrow" />   网络使用信息</span>
                  </el-menu-item>
                  <el-submenu index="3">
                    <template slot="title">
                      <span><img src="../assets/arrow3.png" class="arrow" />   注册表信息</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item class="nav-left" index="registryinfo"><img src="../assets/arrow4.png" class="arrow1"/>注册表基本信息</el-menu-item>
                      <el-menu-item class="nav-left" index="registryassignment"><img src="../assets/arrow4.png" class="arrow1"/>注册表赋值操作</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <span><img src="../assets/arrow3.png" class="arrow" />   进程操作信息</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item class="nav-left" index="processoper"><img src="../assets/arrow4.png" class="arrow1"/>进程操作信息</el-menu-item>
                      <el-menu-item class="nav-left" index="operationthread"><img src="../assets/arrow4.png" class="arrow1"/>进程操作线程信息</el-menu-item>
                      <el-menu-item class="nav-left" index="Hungthread"><img src="../assets/arrow4.png" class="arrow1"/>挂起线程操作信息</el-menu-item>
                      <el-menu-item class="nav-left" index="replythread"><img src="../assets/arrow4.png" class="arrow1"/>恢复线程操作信息</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="moduleoperation">
                    <span slot="title"><img src="../assets/arrow3.png" class="arrow" />   模块操作</span>
                  </el-menu-item>
                </el-menu>
                <!-- </el-col> -->
              </el-aside>
              <el-main class="tab-main">
                <router-view></router-view>
              </el-main>
            </el-container>

          </el-tab-pane>
          <el-tab-pane label="样本捕获">

          </el-tab-pane>
        </el-tabs>
      </div> <!--main-1-->

    </el-main>
    <!-- footer -->
  </el-container>
</template>
<style  >

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
    -webkit-text-stroke-width: 0.4px;
    color:#5EBF18;
    ;}

  /* *********************************************mian start*****************/
  /* 白色条框 */


  .header-2{
    margin: 0;
    height:60px;
    width:100%;
    color:black;

    overflow: hidden;
  }
  /* 绿色字体 */
  .p-2{
    position: relative;
    top: 10px;
    font-size: 18pt;
    left: 20px;
    font-family: '微软雅黑';
    font-weight: bold;
    margin: 0;
  }
  .el-main-1{
    padding: 2px !important;
  }

  .tab-1-1{
    margin-left: 30px;
    margin-top:15px;
    margin-bottom: 10px;
  }
  .table-p1{
    font-family: 'Microsoft YaHei';
    font-size: 12pt;
    color:#BFBFBF;
  }
  /*tabs的颜色 */
  .el-tabs__item.is-active{
      color: #666666 !important;
  }
  .el-tabs__item:hover{
      color: #E95513 !important;
  }
  /*导航栏背景颜色*/
       .el-tabs__nav-wrap.is-left {
         background: #F2F2F2;
       }
       .el-tabs__nav-wrap::after {
         background: #F2F2F2;
       }
       .el-tabs--card>.el-tabs__header .el-tabs__nav {
         background: #F2F2F2;
       }
    /*导航栏间隔*/
       .el-tabs__header {
         padding: 0;
         position: relative;
         margin: 0 0 10px;
       }
       .el-tabs__item:active {
         color: #E95513 !important;
         background: #fff;
       }
       .el-tabs__item:focus, .el-tabs__item:active {
         color: #E95513 !important;
         outline: 0;
         background: #fff;
       }
       .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after {
         background: #fff;
       }
  /*标签页背景色*/
  .el-tabs__item {
    font-size: 12px;
    font-weight: normal;
    color: #666666;
    background: #F2F2F2;
  }
  .el-tabs__item:focus:active {
    outline: 0;
    /* font-size: 12px; */
    /* border-bottom-color: #E95513; */
    color: #E95513 !important;
    background: #fff;
    border-bottom: 2px solid #E95513;
  }
  /*悬停时的背景色*/
  .el-tabs__item:hover{
    color: #E95513 !important;
  }
  /*导航栏激活时下面有颜色的border*/
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom: 2px solid #E95513;
  }
/*导航栏样式*/
  .el-tabs__item.is-left.is-active{
    color: #E95513 !important;
  }
  /* 菜单点击颜色 */
  .el-menu-vertical.el-menu-item.is-active{
    color: #E95513 !important;
  }
  .el-menu-vertical.el-menu-item:hover{
    color: #E95513 !important;
  }

  /****************************************** main  end */
  .el-submenu__title:hover {
    color: #E95513 !important;
    background-color: #ebecf2;
  }

  .origindairy .el-submenu__title{
    background: #ebecf2;
  }
  .origindairy .el-menu-item{
    background: #ebecf2;
  }

  element.style {
    width: 210px;
  }
  .el-aside{
    height: 100%;
    overflow: hidden;
    width: 210px;
  }
  .el-menu-item-group__title {
    padding: 0px 0 0px 20px;
  }

  /*按钮样式调整*/
  .funButton{
    width: 80px;
    height: 30px;
    font-size: 12.14px;
    line-height:6px;
    border-radius: 0px;
  }
  /*表格样式*/
  .el-table th>.cell {
    background: #e95513;
    color: #fff;
    font-weight: lighter;
    font-size: 12px;

    vertical-align: center;
    padding-left: 20px;
    margin-bottom: 0px;
    /* line-height: initial; */
  }

  .el-table th{
    height: 29px;
    border-right: 1px solid #fff;
  }
  .arrow{
    width: 20px;
    height: 20px;
    line-height: 1px;
    position: relative;
    top: -3px;
    left: 5px;
    margin: 0 8px 0 0;
    display: inline-block;
  }
  .arrow1{
    width: 20px;
    height: 20px;
    line-height: 1px;
    position: relative;
    top: -3px;
    left: 5px;
    display: inline;
    margin: 0 8px 0 0;
  }
  /*原始日志侧面导航栏*/
  .el-menu-item, .el-submenu__title {
    height: 56px;
    line-height: 56px;
    position: relative;

    white-space: nowrap;
    list-style: none;
  }

  .el-submenu .el-menu-item,.el-submenu >.el-menu-item {
    height: 56px;
    line-height: 56px;
    padding: 0 45px;
    min-width: 200px;

  }
  /*.el-submenu__title {*/
    /*font-size: 12px;*/
  /*}*/
  /*.el-menu-item {*/
    /*font-size: 12px;*/
  /*}*/
  #nav-left.el-menu-item{
    padding-left: 20px;
  }

  .el-pagination__jump{
    position: relative;
    left: -1140px;
    top:9px;
  }
  .el-select-dropdown__item.selected {
    font-weight: 700;
    background: #e95513;
  }
  .el-pagination__sizes, .el-input .el-input__inner:hover {
    border-color: #fff;
  }
  .el-select-dropdown__item.selected {
    color: #fff;
    font-weight: 700;
    background: #e95513;
  }
  .el-select .el-input .el-select__caret{
    font-size: 12px;
  }
  .el-select.el-input__icon{
    line-height: 30px;
  }
  .el-input{
    font-size: 12px;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover:active{
    background: #e95513;
  }
  .el-select.el-input{
    height: 30px;
  }
  .el-select .el-input.is-focus .el-input__inner{
    border-color:#c0c4cc;
  }
  .el-select.el-input.el-input__inner {
    color: #606266;
    height: 30px;
    line-height: 30px;
  }
  .el-select.el-input__icon{
    line-height: 30px;
    height: 30px;
  }
  .el-select>.el-input--suffix{
    line-height: 30px;
    height: 30px;
  }
  .el-input__suffix{
    height: 30px;
  }
  .el-input__inner{
    line-height: 30px;
    height: 30px;
  }

  .el-icon-arrow-up{
    line-height: 10px;
    height: 30px;
  }
  .is-reverse{
    line-height: 30px;
    height: 30px;
  }
  .nav-left{
    padding-left: 20px !important;
  }
  .el-pagination .el-pager .active{
    background-color: #E95513 !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover{
    color:#E95513 !important;
  }
  .p-page{
    padding-top: 15px;
    color:#666666;
    float:left;
    font-size: 12pt;
  }
  .el-pagination .el-select .el-input .el-input__inner{
    float:left;
  }
  /*分页*/
  .el-pagination .el-select .el-input {
    position: absolute;
    left: -640px;
    top:-15px;
    font-size: 12px;
    border-radius: 0px;
  }

 /*********************确定 跳转 按钮样式*********************/
    .button2{
        background-color: #E95513 !important;
        color: #ffff !important;
        width: 60px;
        height: 30px;
        border-radius: 0px;
        vertical-align: center;
        padding: 2px;
        font-size: 12px;
        margin-left:10px ;
    }
</style>
<script>
  export default {

    data() {
      return {
        jumper:1,
        pagesize:10,
        currentPage: 1,
        administrator:'wulala',
        times:'2018-5-21',
        dialog:false,
        admindata:[
          {
            id:'1',
            ip:'168.196.2.1',
            domainID:'null',
            type:'win789'
          },
          {
            id:'2',
            ip:'168.196.2.1',
            domainID:'null',
            type:'win789'
          },{
            id:'3',
            ip:'168.196.2.1',
            domainID:'null',
            type:'win789'
          },
          {
            id:'4',
            ip:'168.196.2.1',
            domainID:'null',
            type:'win789'
          },
          {
            id:'5',
            ip:'168.196.2.1',
            domainID:'null',
            type:'win789'
          }
        ]

      }
    },
  created(){
    // this.getListHostPot()
  },
  mounted:function(){
    // this.getListHostPot();
  },
    methods: {
      handleSlect(key,keypath){
        this.$emit('updata:activ',key)
      },
      indexMethod(index) {
        return index;
      },
      getListHostPot(){
        var that = this;
        this.$axios.get('/getListHostPot')
          .then(function (response) {
            // that.admindata["IP"]= response.data["IP"];
            // that.admindata["type"]= response.data["type"];
            // that.admindata["domainID"] = "null";
            that.admindata = response.data;
          })
          .catch(function (error) {
            alert('handle error')
            console.log(error);
          })
          .then(function () {
          });
      },


      handleSizeChange(size) {
        this.pagesize = size;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        console.log(`当前页: ${val}`);
      },
      open2() {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }


    }

  };
</script>
