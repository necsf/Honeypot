<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main  class="el-main-1">
      <div class="header-2">
              <p class="p-2"> <img src="../assets/important.png"><span class="wow">主机蜜罐</span>
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
                            <el-button style="background:#E95513;color:#ffffff;" >  删除  </el-button>
                            &nbsp;&nbsp;
                            <el-button style="background:#E95513;color:#ffffff;" >编辑</el-button>
                        </div><!--table-1-1-->
                        <div class="tab-1-2">
                            <el-table
                                :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table11"
                                :data="admindata"
                                style="width: 100%">
                                <el-table-column
                                type="index"
                                width="80"
                                label="编号"
                                :index="indexMethod">
                                </el-table-column>
                                <el-table-column
                                prop="IP"
                                label="IP"
                                width="180">
                                </el-table-column>
                                <el-table-column
                                prop="domainID"
                                label="domainID"
                                width="180">
                                </el-table-column>
                                <el-table-column
                                prop="user"
                                label="使用者">
                                </el-table-column>
                            </el-table>
                        </div><!--table-1-2-->
                        <p class="table-p1">显示第1条到第{{page}}条记录，总共{{page}}记录</p>
                    </div><!--table-1-->
                </el-tab-pane>
                <el-tab-pane label="主机告警分析">

                </el-tab-pane>
                <!-- 原始日志查询 -->
                <el-tab-pane label="原始日志查询" class="origindairy">
                    <el-container style="height:100%;" direction="vertrcal">
                        <!-- 左侧菜单栏 -->
                        <el-aside class="tab-aside" style="width: 210px">
                            <!-- <el-col :span="5"> -->
                            <el-menu
                            router
                            active-text-color="#E95513"
                            default-active="$route.name"
                            class="el-menu-vertical"
                            @select="handleSelect"
                            @open="handleOpen"
                            @close="handleClose"
                            style="width: 200px;height: 500px;background: #ebecf2; ">
                            <el-submenu index="1">
                                <template slot="title">
                                <span>文件操作信息</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="fileoperations">文件操作详情</el-menu-item>
                                <el-menu-item index="filemap">文件map操作详情</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                                <el-menu-item index="networkusage">
                                    <span slot="title">网络使用信息</span>
                                </el-menu-item>
                            <el-submenu index="3">
                                <template slot="title">
                                <span>注册表信息</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="registryinfo">注册表基本信息</el-menu-item>
                                <el-menu-item index="registryassignment">注册表赋值操作</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                <span>进程操作信息</span>
                                </template>
                                <el-menu-item-group>
                                <el-menu-item index="processoper">进程操作信息</el-menu-item>
                                <el-menu-item index="operationthread">进程操作线程信息</el-menu-item>
                                <el-menu-item index="Hungthread">挂起线程操作信息</el-menu-item>
                                <el-menu-item index="replythread">恢复线程操作信息</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item index="moduleoperation">
                                    <span slot="title">模块操作</span>
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
       /* *********************************************mian start*****************/
     /* 白色条框 */
      .wow{position: relative;
        bottom:10px;}

    .header-2{
        margin: 0;
        height:60px;
        width:100%;
        color:black;
        font-weight: 500;
        overflow: hidden;
    }
    /* 绿色字体 */
    .p-2{
        position: relative;
        top: 10px;
        font-size: 18pt;
        left: 20px;
        font-family: '微软雅黑';
        margin: 0;
    }
    .el-main-1{
        padding: 2px !important;
    }
        /* ************************************tabs的颜色 */
    .el-tabs__item.is-active{
        color: #E95513 !important;
    }
    .el-tabs__item:hover{
        color: #E95513 !important;
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
    /* *********table 的行边框 */
    /* .table1 td{
        padding: 0;
        height: 30px;
    } */
    /* ******原始日志查询-左侧菜单栏 start*/
    .tab-aside{
        height: 100%;
        overflow: hidden;

    }
    /* 菜单点击颜色 */
    .el-menu-vertical.el-menu-item.is-active{
         color: #E95513 !important;
    }
    .el-menu-vertical.el-menu-item:hover{
        color: #E95513 !important;
    }
    /* .tab-main{
        background-color: #F56C6C;
    } */
    /****************************************** main  end */
       .el-submenu__title:hover {
         color: #E95513 !important;
         background-color: #ebecf2;
       }
       /* .el-menu-item:focus, .el-menu-item:hover {
         outline: 0;
         color: #E95513 !important;
         background-color: #ebecf2;
       } */
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
       /*.el-main{*/
         /*padding: 0px;*/
       /*}*/
       /*.el-header{*/
         /*padding: 0;*/
       /*}*/
       /*.el-footer{*/
         /*padding: 0;*/
       /*}*/


</style>
<script>
export default {

    data() {
      return {
          page:'4',
          administrator:'wulala',
          times:'2018-5-21',
          admindata:[

              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              },
              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              },
              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              },
              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              },
              {
                  IP:'168.196.2.1',
                  domainID:'123',
                  user:'win789'
              },
          ]

        }
    },
    methods: {
        handleSlect(key,keypath){
            this.$emit('updata:activ',key)
        },
        indexMethod(index) {
            return index;
        },


    },

};
</script>
