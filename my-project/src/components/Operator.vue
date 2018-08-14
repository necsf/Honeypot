<template>
 <el-container class="what" style="height:100%;" direction="vertrcal">
  <el-header height="150px"> 
      <div class="header-2">
              <p class="p-2"> <img src="../assets/important.png"><span class="wow">样本操作</span>
              </p>
          </div>
          <hr style="margin-bottom:0;"/>
        <div class="tab">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="样本管理" name="first">
        <el-container style="height:525px" >
    <el-aside width="250px">
        <el-row class="tac">
  <el-col :span="12">
      <el-menu>  
      <el-menu-item index="1">
        <span slot="title">192.168.1.12</span>
      </el-menu-item>
      <el-menu-item index="2" >
        <span slot="title">192.168.1.13</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">192.168.1.14</span>
      </el-menu-item>
       <el-menu-item index="4">
        <span slot="title">192.168.1.15</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
    </el-aside>
    <el-main>
        <div>
        样本名称：<el-input class="small" v-model="input" placeholder="请输入样本名称查询"></el-input>
          <el-button type="danger">查询样本</el-button>
        </div>
        <br/>
        <div>
            <div class="main-1-1-2">
                    <el-table
                        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                        height=500px;
                        row-style="30px"
                        cell-style="padding:0"
                        class="table1"
                        :data="tableData"
                        style="width: 100%; ">
                        <el-table-column
                        type="index"
                        label="编号"
                        width="110"
                        :index="indexMethod">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="样本名称"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="md5"
                        label="MD5"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="location"
                        width="240"
                        label="位置">
                        </el-table-column>
                        <el-table-column
                        prop="type"
                        label="蜜罐类型"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="time"
                        label="时间"
                        width="240">
                        </el-table-column>
                        <el-table-column
                        prop="operator"
                        label="操作"
                        width="240">
                        <template slot-scope="scope">
                                        <el-button
                                          type="text"
                                          size="mini"
                                          @click="dialog = true">下载  详情</el-button>
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
    </div>
    <div class="p-page">显示第1到第{{1}}条记录，总共{{10}}条记录</div>
            <div style="float:right;margin-top:10px;">
                <!-- <p class="p-page">显示第1到第{{1}}条记录  每页显示</p> -->
                <!-- *********************************分页按钮 -->
                <el-pagination 
                background
                prev-text="上一页"
                next-text="下一页"
                @size-change="handleSizeChange"
                 @current-change="handleCurrentChange" 
                 :current-page="currentPage4" 
                 :page-sizes="[10, 20, 30, 40]" 
                 :page-size="100" 
                 layout=" sizes, prev, pager, next, jumper" :total="50">
                </el-pagination>
            </div>
    </el-main>
  </el-container>
    </el-tab-pane>
    <el-tab-pane label="样本分析" name="second">
        <div class="center">
            样本上传:<el-input class="big" v-model="input" placeholder="请选择样本上传"></el-input>
             <el-button style="font-size:20px" type="danger">&nbsp;&nbsp;&nbsp;分析样本&nbsp;&nbsp;&nbsp;</el-button>
            <hr class="bottom" />

        </div>
    </el-tab-pane>
    
  </el-tabs>

        </div>
</el-header>
  
</el-container>
 
</template>
<style scoped>
 .wow{
        position: relative;
        bottom:15px;
      }

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
    .el-menu{
        width: 245px;
    }
    .el-menu-item.is-active{
    color: #E95513 !important;
  }
  .el-menu-item:hover{
    color: #E95513 !important;
  }


  

 
  .what{
      margin-left: 20px;
      margin-right: 20px;

  }
  .center{
      text-align: left;
      margin-left: 300px;
      font-size: 30.2pt;
      margin-top: 150px;
  }
  .big{
      width: 300px;
      margin-left: 10px;
      font-size:30px;
    
  }
  .bottom{
      width:300px;
      margin-top: 0px;
      position: relative;
      right:350px;
      bottom:8px;
  }
  .small{
      width:250px;
  }


</style>
<script>
export default {
    data() {
      return {
        administrator:'wulala',
          times:'2018-5-21',
         tableData: [{
            index: '1',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },{
            index: '2',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },{
            index: '3',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },   {
            index: '4',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },{
            index: '5',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },{
           index: '6',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },{
            index: '7',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载 详情'
            },{
           index: '8',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载   详情'
            },{
                index: '9',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载   详情'
            },{
                index: '10',
            name: '123.doc',
            md5: 'xxxxxxxxxxx ',
            location: 'C:\\file\\1\\123.doc',
            type:'主机蜜罐',
            time:'2018.8.1 10:21:53',
            operator:'下载   详情'

            }
            ],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }

    
};
</script>
