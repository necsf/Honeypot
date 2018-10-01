<template>
 <el-container class="what" style="height:100%;" direction="vertrcal">
  <el-header class="top"  height="150px">
      <div class="header-2">
              <p class="p-2"><i class="iconfont">&#xe652;</i>样本操作
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
          <el-button  class="button4" style="background:#E95513;color:#ffffff;">查询样本</el-button>
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
    <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
        <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
        <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
          <el-option label="10" value="10"></el-option>
          <el-option label="20" value="20"></el-option>

        </el-select>
        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span></div>

      <div style="float:right;margin-top:10px;">

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
    </el-main>
  </el-container>
    </el-tab-pane>
    <el-tab-pane label="样本分析" name="second">
        <div class="center">
            样本上传:<el-input class="big" v-model="input" placeholder="请选择样本上传"></el-input>
             <el-button  class="button5"  style="font-size:20px;background:#E95513;color:#ffffff;">&nbsp;&nbsp;&nbsp;分析样本&nbsp;&nbsp;&nbsp;</el-button>


        </div>
    </el-tab-pane>

  </el-tabs>

        </div>
</el-header>

</el-container>

</template>
<style scoped>
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
    color:#5EBF18;
    ;}
.top{
  padding: 0;
}
    .header-2{
        margin: 0;
        padding:0;
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
        left: 0px;
        font-family: '微软雅黑';
        margin: 0;
    }

  .what{

      margin-right: 20px;

  }
  .center{
      text-align: left;
      margin-left: 400px;
      font-size: 30.2pt;
      margin-top: 200px;
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
   /*标签页背景色*/
  .el-tabs__item {
    font-size: 12px;
    font-weight: normal;
    color: #666666;
    background: #F2F2F2;
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

  /*输入框样式*/
  .inputType1 .el-input__inner{
    height: 30px;
    border-right: 0px;
    border-radius: 0px;
    margin-right: 0px;
  }

  /* 菜单点击颜色 */
  .el-menu-vertical.el-menu-item.is-active{
    color: #E95513 !important;
  }
  .el-menu-vertical.el-menu-item:hover{
    color: #E95513 !important;
  }
  /* 翻页背景色 */
  .el-pagination .el-pager .active{
      background-color: #E95513 !important;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover{
        color:#E95513 !important;
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
  .el-pagination__jump{
    position: relative;
    left: -1140px;
    top:9px;
  }
  el-pagination__sizes .el-input .el-input__inner:hover {
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
  /*.el-select.el-input*/ .el-input--suffix{
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


   /************ 查看详情的颜色 ***************/
  .el-button--text{

    color:#E95513 !important;
  }
  .el-button--text.is-active{
    color: #E95513 !important ;
  }
  .el-button--text:hover{
    color: #E95513 !important;
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
 /*********************普通按钮样式*********************/
    .button4{
         background-color: #E95513 !important;
         color: #ffff !important;
         width: 80px;
         height: 30px;
         border-radius: 0px;
         vertical-align: center;
         padding: 2px;
         font-size: 12px;
         margin-left:10px ;
    }
/*********************分析样本 按钮样式*********************/
    .button5{
         background-color: #E95513 !important;
         color: #ffff !important;
         width: 150px;
         height: 50px;
         border-radius: 0px;
         vertical-align: center;
         padding: 2px;
         font-size: 12px;
         margin-left:10px ;
    }
    /*修改侧面导航栏样式*/
.el-menu-item.is-active {
  color: #e95513;
}

.el-menu-item :hover {

}
.el-menu-item:focus, .el-menu-item:hover {
  outline: 0;
  background-color: #ecf5ff;
}
.el-menu {
  font-size: 14px !important;
}
.el-col-12.el-main.el-main-item{
  font-size: 14px;
  height: 56px;
}
.el-col-12 {
  width: 90%;

}
.el-col-12 >.el-menu {
  background: #f2f2f2;
  height: 525px;
  font-size: 14px !important;
}

</style>
<script>
export default {
    data() {
      return {

        activeName2: 'first',
        jumper:10,
        pagesize:10,

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
