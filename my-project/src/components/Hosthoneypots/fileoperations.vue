<template>
  <el-container style="height:100%;" direction="vertrcal">

    <el-header class="h-input" height=150px; >
      <el-form :inline="true"
               :model="formInline"
               size="small"
               class="demo-form-inline"
               :label-position="right"
      >
        <el-form-item label="操作类型:">
          <el-select v-model="formInline.operations" style="padding-left:1px;width:187px" >
            <el-option label="读文件" value="1"></el-option>
            <el-option label="写文件" value="2"></el-option>
            <el-option label="创建文件" value="3"></el-option>
            <el-option label="打开文件" value="4"></el-option>
            <el-option label="删除文件" value="5"></el-option>
            <el-option label="CreateSection" value="6"></el-option>
            <el-option label="MapView" value="7"></el-option>
            <el-option label="UnmapView" value="8"></el-option>
            <el-option label="重命名" value="9"></el-option>
            <el-option label="删除目录" value="10"></el-option>
            <el-option label="未知" value="11"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文件类型:">
          <el-select v-model="formInline.files"  style="padding-left:1px;width:187px">
            <el-option label="IO_TYPE_ADAPTRE" value="1"></el-option>
            <el-option label="IO_TYPE_CONTROLLFR" value="2"></el-option>
            <el-option label="IO_TYPE_DEVICE" value="3"></el-option>
            <el-option label="IO_TYPE_DRIVER" value="4"></el-option>
            <el-option label="IO_TYPE_FILE" value="5"></el-option>
            <el-option label="IO_TYPE_IRP" value="6"></el-option>
            <el-option label="IO_TYPE_ADAPTER" value="7"></el-option>
            <el-option label="IO_TYPE_PACKET" value="8"></el-option>
            <el-option label="IO_TYPE_TIMER" value="9"></el-option>
            <el-option label="IO_TYPE_" value="10"></el-option>
            <el-option label="IO_TYPE_LOG" value="11"></el-option>
            <el-option label="IO_TYPE_MESSAGE" value="12"></el-option>
            <el-option label="IO_TYPE_EXTENSION" value="13"></el-option>
            <el-option label="ERROR" value="14"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文件路径:">
          <el-select v-model="formInline.routers" style="padding-left:1px;width:187px">
            <el-option label="C://" value="C:/"></el-option>
            <el-option label="C://" value="C:/"></el-option>
          </el-select>
        </el-form-item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-form-item label="进程ID:" >
          <el-input v-model="formInline.progressID" style="padding-left:15px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="进程名:">
          <el-input v-model="formInline.progress" style="padding-left:15px;width:187px" ></el-input>
        </el-form-item>
        <el-form-item label="操作时间:">
          <el-input v-model="formInline.date" style="padding-left:1px;width:187px"></el-input>
        </el-form-item>
        <el-form-item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button style="background:#E95513;color:#ffffff;"  @click="getAimFileOperation" class="funButton">查询</el-button>
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
        :data="fileoperation.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%">
        <el-table-column
          prop="id"
          width="80"
          label="序号">

        </el-table-column>
        <el-table-column
          prop="opType"
          label="操作类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="state"
          label="文件类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="filePath"
          label="文件路径"
          width="450">
        </el-table-column>
        <el-table-column
          prop="processName"
          label="进程名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="processPath"
          label="进程ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="time"
          label="操作时间"
          width="150">
        </el-table-column>
      </el-table>
      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第{{(currentPage-1) * pagesize +1}}到第{{((currentPage * pagesize)<(fileoperation.length))?currentPage * pagesize:fileoperation.length}}条记录，总共{{fileoperation.length}}条记录
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
          :page-size="pagesize"
          :total="fileoperation.length"
          layout="slot,prev, pager, next,total">
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
    padding-top: 15px;
    color:#666666;
    float:left;
    font-size: 12pt;
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
  /* 翻页背景色 */
  .el-pagination .el-pager .active{
    background-color: #E95513 !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover{
    color:#E95513 !important;
  }
  .el-form-item.style{
    width:187px;
    padding-left:15px;
  }
  .el-table td div{
    font-size: 12px;
  }
  .el-menu-item{
    padding-left: 20px;
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
        currentPage: 1,
        formInline: {
          operations:'',
          files:'',
          routers:'',
          progressID:'',
          progress:'',
          date:''
        },
        fileoperation:[
          {
            number:'1223',
            operations:"打开文件",
            files:'IO_TYPE_FILE',
            routers:'C:win/di',
            progress:'hosthoney.exe',
            progressID:'11222',
            date:'2018'
          },
          {
            number:'1223',
            operations:"打开文件",
            files:'IO_TYPE_FILE',
            routers:'C:win/di',
            progress:'hosthoney.exe',
            progressID:'11222',
            date:'2018'

          },
          {
            number:'1223',
            operations:"打开文件",
            files:'IO_TYPE_FILE',
            routers:'C:win/di',
            progress:'hosthoney.exe',
            progressID:'11222',
            date:'2018'

          },

        ]
      }
    },
    created(){
      this.getAllFileOperation()
    },
    mounted:function(){
      this.getAllFileOperation();
    },
    methods: {
      //获取全部文件操作信息
      getAllFileOperation(){
        var that = this;
        this.$axios.get('/getAllFileOperation')
          .then(function(response){
            that.fileoperation = response.data;
          })
          .catch(function (error){
            alert('handle error')
            console.log('error');
          })
          .then(function () {

          });
      },
      /*模糊查询得到目标文件操作信息*/
      getAimFileOperation(){
        var that = this;
        this.$axios.get('/getAimFileOperation',
          {
            params:{
              opType
              :
              that.formInline.operations,
              state
              :
              that.formInline.files,
              filePath
              :
              that.formInline.routers,
              processPath
              :
              that.formInline.progressID,
              processName
              :
              that.formInline.progress,
              time
              :
              that.formInline.date
            }
          })
          .then(function(response){
            that.fileoperation = response.data;
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
      //      handleSizeChange(val) {
      //     console.log(`每页 ${val} 条`);
      //   },
      //   handleCurrentChange(val) {
      //     console.log(`当前页: ${val}`);
      //   }
      // },
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
