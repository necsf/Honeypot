<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main class="el-main-2" > 
      <div class="header-2">
              <p class="p-2"><i class="iconfont">&#xe651;</i>应用蜜罐</p>
          </div>
          <hr style="margin-bottom:0;"/>
      <div class="main-1" >
            <el-tabs 
                class="tabs-1"
                :tab-position="top" 
                type="card"
                @tab-click="handleClick"

                 >
                <!-- 节点配置 -->

                <el-tab-pane label="应用蜜罐信息"  >

                    <div class="tab-1">
                        <div class="tab-1-1">
                                <p class="IP" style="position: relative;top:0px">IP地址:
                                    <el-input v-model="temdata.IP" style="width:187px"></el-input>
                                    <el-button class="button4" style="background:#E95513;color:#ffffff;"  @click="onSubmit">查询主机</el-button>
                                </p>
                        </div>
                        <div class="tab-1-2">
                        <el-table
                            :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table11"
                                :data="temdata"
                                style="width: 100%">
                                    <el-table-column
                                        prop="number"
                                        label="序号"
                                        width="150">
                                    </el-table-column>
                                    <el-table-column
                                        prop="IP"
                                        label="IP地址"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="type"
                                        label="主机类型"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="pan"
                                        label="硬盘"
                                        width="220">
                                    </el-table-column>
                                    <el-table-column
                                        prop="CPU"
                                        label="CPU"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="load"
                                        label="内存"
                                        width="200">
                                    </el-table-column>
                                    <el-table-column
                                        prop="operater"
                                        label="操作"
                                       >
                                      <template slot-scope="scope">
                                        <el-button
                                          type="text"
                                          size="mini"
                                          style="font-weight:bold"
                                          @click="dialog = true">查看详情 蜜罐管理</el-button>
                                        <el-dialog title="查看更多" :visible.sync="dialog">
                                          <el-table
                                            :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                            class="table1"
                                            id="table11"
                                            :data="temdata"
                                            style="width: 100%"><!--表的名字-->
                                            <!-- 选择框   -->

                                          </el-table>
                                          <div slot="footer" class="dialog-footer">
                                            <el-button @click="dialog = false">取 消</el-button>
                                            <el-button type="danger" @click="dialog = false">确 定</el-button>
                                          </div>
                                        </el-dialog>


                                      </template>
                                    </el-table-column>
                                </el-table>


                           </div>
                        </div><!--table-1-2-->
                  <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
                    <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                    <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                      <el-option label="10" value="10"></el-option>
                      <el-option label="20" value="20"></el-option>
                    </el-select>
                    <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span>
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
                      :current-page="currentPage4"
                      :page-sizes="[10, 20]"
                      :page-size="100"
                      layout="slot,prev, pager, next" :total="50">
                      <!-- <slot name="as">dddd</slot> -->
                    </el-pagination>
                  </div>


 </el-tab-pane>
                
            </el-tabs>
      </div> <!--main-1-->

    
 </el-main>
  <!-- footer -->
</el-container>
</template>
<style >
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
       /* *********************************************mian start*****************/
    /* 绿色字体 */
  
    .p-page{
    padding-top: 15px;
    color:#666666;
    float:left;
    font-size: 12pt;}
    .p-2{
        position: relative;
        
        font-size: 18pt;
        font-weight: bold;
        left: 20px;
        font-family: '微软雅黑';
        margin-bottom: 20px;
    }       
    /* 白色条框 */
    .header-2{
        margin: 0;
        height:60px;
        width:100%;
        color:black;
        font-weight: 500;
        overflow: hidden;
    }
    .main-1{
        padding: 2px !important;
    }
       .el-table__body, .el-table__footer, .el-table__header{
         font-weight: bold;
         font-size: 12px;
       }
    .el-main-2{
        padding: 2px !important;
    }
        /* ************************************tabs的颜色 */
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
       /*导航栏背景颜色*/
       .el-tabs--card>.el-tabs__header .el-tabs__nav {
         background: #F2F2F2;
       }
       /*导航栏间隔*/
       .el-tabs__header {
         padding: 0;
         position: relative;
         margin: 0 0 10px;
       }
       .el-tabs__item:focus, .el-tabs__item:active {
         color: #E95513 !important;
         outline: 0;
         background: #fff;
       }

       /*导航栏样式*/
       .el-tabs__item.is-left.is-active{
         color: #E95513 !important;
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
       }

       .tab-1-2 tr:hover{
            background-color: #fff !important;
       }
    /********************************** 查看详情的颜色 */
    .el-button--text{

        color:#E95513;
    }
    .el-button--text.is-active{
        color: #E95513;
    }
    .el-button--text:hover{
        color: #E95513;
    }

    .tab-1-1{
        margin-left: 30px;
        margin-top:15px;
        margin-bottom: 10px; 
    }

    .tab-2-1{
       margin-left: 30px;
       margin-top:15px;
       margin-bottom: 10px;
    }

    .table-p1{
        font-family: 'Microsoft YaHei';
        font-size: 12pt;
        color:#BFBFBF;
    }
    /* 翻页背景色 */
    .el-pagination .el-pager .active{
        background-color: #E95513 !important;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover{
        color:#E95513 !important;

    }
    /****************************************** main  end */
    
</style>
<script>
export default {
    data() {
      return {
        page: '16',
        Page1: 5,
        Page2: 5,
        Page3: 5,
        Page4: 4,
        dialogFormVisible: false,
        dialogText: false,
        dialogTable: false,
        form: {
          name: '',
          IP:'',
          temserver:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        // 表的名字
          temdata:[
              
              {
            number: '1',
            IP: '192.168.1.13',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '2',
            IP: '192.168.1.15',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '3',
            IP: '192.168.13.110',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '4',
            IP: '192.168.13.112',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '5',
            IP: '192.168.13.114',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '6',
            IP: '192.168.13.116',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '7',
            IP: '192.168.13.118',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",},
          ]
          
    
        }
    },
    methods: {
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>
