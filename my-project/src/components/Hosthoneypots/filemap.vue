<template>
  <el-container style="height:100%;" direction="vertrcal">
    <el-header class="h-input" height=150px; >
      <el-form :inline="true"
               :model="formInline"
               size="small"
               class="demo-form-inline"
               :label-position="right" >
        <el-form-item label="操作类型:">
          <el-select v-model="formInline.operations" style="padding-left:1px;width:187px">
            <el-option label="打开文件" value="111"></el-option>
            <el-option label="写文件" value="222"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文件类型:">
          <el-select v-model="formInline.files" style="padding-left:1px;width:187px" >
            <el-option label="IO_TYPE_FILE" value="IO_TYPE_FILE"></el-option>
            <el-option label="IO_TYPE_FILE" value="IO_TYPE_FILE"></el-option>
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
          <el-input v-model="formInline.progress" style="padding-left:15px;width:187px"></el-input>
        </el-form-item>
        <el-form-item label="操作时间:">
          <el-input v-model="formInline.date" style="padding-left:1px;width:187px"></el-input>
        </el-form-item>
        <el-form-item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button style="background:#E95513;color:#ffffff;"  @click="onSubmit" class="funButton">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="m-table">
      <el-table
        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
        row-style="30px"
        cell-style="padding:0"
        class="table1"
        id="table11"
        :data="filemap"
        style="width: 100%">
        <el-table-column
          prop="number"
          width="80"
          label="序号">

        </el-table-column>
        <el-table-column
          prop="operations"
          label="操作类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="files"
          label="文件类型或进程句柄"
          width="200">
        </el-table-column>
        <el-table-column
          prop="routers"
          label="文件路径或unmap地址"
          width="450">
        </el-table-column>
        <el-table-column
          prop="progress"
          label="进程名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="progressID"
          label="进程ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作时间"
          width="150">
        </el-table-column>
      </el-table>
      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
        <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
        <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
          <el-option label="10" value="10"></el-option>
          <el-option label="20" value="20"></el-option>

        </el-select>
        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2"style="font-size: 12px;">跳转</el-button></span></div>

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
</template>
<style scoped>
  /* .table1 td{
          padding: 0;
          height: 30px;
  } */
  .p-page{
    padding-top: 15px;
    color:#666666;
    float:left;
    font-size: 12pt;
  }
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
  .el-pagination__jump{
    position: relative;
    left: -1140px;
    top:9px;
  }
  .el-select-dropdown__item.selected {
    color: #409EFF;
    font-weight: 700;
    background: #e95513;
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
  .el-select.el-input. el-input--suffix{
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
        formInline: {

        },
        filemap:[
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

          }


        ]
      }
    },
    methods: {
      // 分页
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
