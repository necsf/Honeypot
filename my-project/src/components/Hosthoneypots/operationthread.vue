<template>
  <el-container style="height:100%;" direction="vertrcal">
    <el-header class="h-input" height=150px; >
      <el-form :inline="true"
               :model="formInline"
               size="small"
               class="demo-form-inline"
               :label-position="right" >
        <el-form-item label="当前进程名:">
          <el-input v-model="formInline.progress" style="padding-left:15px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="当前进程ID:">
          <el-input v-model="formInline.progressID" style="padding-left:15px;width:187px" ></el-input>
        </el-form-item>
        <el-form-item label="线程句柄:">
          <el-input v-model="formInline.handle" style="padding-left:15px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="被操作进程名:">
          <el-input v-model="formInline.progressname" style="padding-left:1px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="被操作进程ID:">
          <el-input v-model="formInline.XprogressID" style="padding-left:1px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="操作时间:">
          <el-input v-model="formInline.date" style="padding-left:30px;width:187px" ></el-input>
        </el-form-item>
        <el-form-item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button style="background:#E95513;color:#ffffff;"  @click="getAimCreateThread" class="funButton">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="m-table">
      <el-table
        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
        class="table1"
        row-style="30px"
        cell-style="padding:0"
        id="table11"
        :data="filemap.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%">
        <el-table-column
          prop="id"
          width="80"
          label="序号">

        </el-table-column>
        <el-table-column
          prop="currentProcessID"
          label="当前进程ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="currentProcessName"
          label="当前进程名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="threadHandle"
          label="线程句柄"
          width="200">
        </el-table-column>
        <el-table-column
          prop="targetProcessID"
          label="目标进程ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="targetProcessName"
          label="目标进程名"
          width="350">
        </el-table-column>
        <el-table-column
          prop="time"
          label="操作时间">
        </el-table-column>
      </el-table>
      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第{{(currentPage-1) * pagesize +1}}到第{{((currentPage * pagesize)<(filemap.length))?currentPage * pagesize:filemap.length}}条记录，总共{{filemap.length}}条记录
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
          :page-size="pagesize"
          :total="filemap.length"
          layout="slot,prev, pager, next,total" >
          <!-- <slot name="as">dddd</slot> -->
        </el-pagination>
      </div>

    </el-main>
  </el-container>
</template>
<style scoped>
  /* .table1 td{
          padding: 0;
          height: 30px;
  } */
  .m-table{
    width: 100%;
    height: 100%;
  }
  .h-input{
    width: 100%;
  }
  .p-page{
    font-size: 12pt;
  }

  .el-submenu__title{
    font-size:12px;
  }
  /*表格样式*/
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

</style>
<script>
  export default {
    data(){
      return {
        jumper:10,
        pagesize:10,
        dialog:false,
        dialogFormVisible: false,
        dialogText: false,
        dialogTable: false,
        formLabelWidth: '120px',
        currentPage:1,


        formInline:{
          progress:'',
          progressID:'',
          handle:'',
          progressname:'',
          XprogressID:'',
          date:'',
        },
        filemap:[]

      }
    },
    created(){
      this.getAllCreateThread()
    },
    mounted:function(){
      this.getAllCreateThread();
    },
    methods: {
      //获取全部进程操作线程信息
      getAllCreateThread(){
        var that = this;
        this.$axios.get('/getAllCreateThread')
          .then(function(response){
          that.filemap = response.data.AllCreateThread;
        })
          .catch(function (error){
            alert('handle error')
            console.log('error');
          })
          .then(function () {

          });
      },
      // 分页
      handleSizeChange(size) {
        this.pagesize = size;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        console.log(`当前页: ${val}`);
      },
      getAimCreateThread(){
        var that = this;
        this.$axios.get('/getAimCreateThread',{
        params:{
          filemap_currentProcessName:that.formInline.progress,
            filemap_currentProcessID
        :
          that.formInline.progressID,
            filemap_threadHandle
        :
          that.formInline.handle,
            filemap_targetProcessName
        :
          that.formInline.progressname,
            filemap_targetProcessID
        :
          that.formInline.XprogressID,
            filemap_time
        :
          that.formInline.date
        }
        })
          .then(function (response) {
          that.filemap = response.data.AimCreateThread;
        })
          .catch(function (error) {
            alert('handle error')
          })
          .then(function () {
            //什么时候都执行的
          });
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
