<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main  class="el-main-1"> 
      <div class="header-2">
              <p class="p-2"> <i class="el-icon-menu"></i>主机蜜罐
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
                <el-tab-pane label="主机蜜罐管理">
                    <div class="tab-1">
                        <div class="tab-1-1">
                            <el-button type="danger">删除</el-button>
                            &nbsp;&nbsp;
                            <el-button type="danger">编辑</el-button>
                        </div><!--table-1-1-->
                        <div class="tab-1-2">
                            <el-table
                                :header-cell-style="{background:'#EE6363',padding:0,color:'#FFFFFF'}"
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
                <el-tab-pane label="原始日志查询">
                    <el-container style="height:100%;" direction="vertrcal">
                        <!-- 左侧菜单栏 -->
                        <el-aside class="tab-aside">
                            <!-- <el-col :span="5"> -->
                            <el-menu 
                            router
                            default-active="$route.name" 
                            class="el-menu-vertical" 
                            @select="handleSelect"
                            @open="handleOpen" 
                            @close="handleClose">
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
<style scoped>
       /* *********************************************mian start*****************/
     /* 白色条框 */
    .header-2{
        margin: 0;
        height:45px;
        width:100%;
        color:#B3EE3A;
        font-weight: 500;
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
        padding: 2px;
    }
        /* ************************************tabs的颜色 */
    .el-tabs__item.is-active{
        color: #F56C6C;
    }
    .el-tabs__item:hover{
        color: #F56C6C;
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
    .el-menu-item.is-active{
         color: #F56C6C;
    }
    .el-menu-item:hover{
        color: #F56C6C;
    }
    /* .tab-main{
        background-color: #F56C6C;
    } */
    /****************************************** main  end */
    
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